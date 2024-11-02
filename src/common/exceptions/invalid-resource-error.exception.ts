import { APP_STATUS } from '@/constants'
import { AppError } from './app-error.exception'

export class InvalidResourceError extends AppError {
  constructor(cause?: string) {
    super(APP_STATUS.INVALID_RESOURCE, cause)
  }
}
