import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response } from 'express'
import { AppError } from '../exceptions/app-error.exception'
import { APP_STATUS, MESSAGE_SOURCE } from '@/constants'
import { tagSource } from '@/utils'
import { ErrorResponse } from '../responses/error.response'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const httpStatus = exception.getStatus()

    if (exception instanceof AppError) {
      return response.status(httpStatus).json(exception.toResponse())
    }

    const code = APP_STATUS.UNKNOWN
    const message = tagSource(MESSAGE_SOURCE.NEST, exception.message)

    response.status(httpStatus).json(new ErrorResponse(code, message))
  }
}
