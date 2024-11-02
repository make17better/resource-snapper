import { APP_STATUS } from '@/constants'
import { AppError } from './app-error.exception'

export class FieldValidationError extends AppError {
  constructor(cause?: string) {
    super(APP_STATUS.FIELD_VALIDATION_ERROR, cause)
  }
}
