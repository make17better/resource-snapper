import { APP_STATUS } from '@/constants'
import { AppError } from './app-error.exception'

export class MethodNotAllowedError extends AppError {
  constructor(cause?: string) {
    super(APP_STATUS.METHOD_NOT_ALLOWED, cause)
  }
}
