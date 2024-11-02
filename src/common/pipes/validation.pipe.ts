import { ValidationError } from 'class-validator'
import { Injectable, ValidationPipe } from '@nestjs/common'
import { FieldValidationError } from '@/common/exceptions/field-validation-error.exception'
import { APP_MESSAGE, FALLBACK_CONSTRAINT } from '@/constants'

const fieldValidationErrorFactory = (errors: ValidationError[]): FieldValidationError => {
  const description = errors
    .map((error) => {
      const constraint = error?.constraints ? Object.values(error.constraints).join(', ') : FALLBACK_CONSTRAINT

      return `${error.property}: ${constraint}`
    })
    .join('; ')

  const cause = `${APP_MESSAGE.FIELD_VALIDATION_ERROR} (${description})`

  return new FieldValidationError(cause)
}

@Injectable()
export class FieldValidationPipe extends ValidationPipe {
  constructor() {
    super({ transform: true, exceptionFactory: fieldValidationErrorFactory })
  }
}
