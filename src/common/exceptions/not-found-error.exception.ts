import { APP_STATUS } from '@/constants'
import { AppError } from './app-error.exception'

export class NotFoundError extends AppError {
  constructor(cause?: string) {
    super(APP_STATUS.NOT_FOUND, cause)
  }
}
