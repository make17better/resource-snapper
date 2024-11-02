import { APP_MESSAGE_MAPPING, APP_STATUS, APP_STATUS_MAPPING, MESSAGE_SOURCE } from '@/constants'
import { tagSource } from '@/utils'
import { HttpException } from '@nestjs/common'
import { ErrorResponse } from '../responses/error.response'

export class AppError extends HttpException {
  private readonly code: APP_STATUS
  public cause: string | undefined

  constructor(code: APP_STATUS, cause?: string) {
    super(APP_MESSAGE_MAPPING[code], APP_STATUS_MAPPING[code])

    this.code = code
    this.cause = cause
  }

  public getCode() {
    return this.code
  }

  public toResponse() {
    const taggedMessage = tagSource(MESSAGE_SOURCE.APP, this.cause ?? this.message)

    return new ErrorResponse(this.code, taggedMessage)
  }
}
