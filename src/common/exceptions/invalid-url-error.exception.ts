import { APP_STATUS } from '@/constants'
import { AppError } from './app-error.exception'

export class InvalidUrlError extends AppError {
  constructor(cause?: string) {
    super(APP_STATUS.INVALID_URL, cause)
  }
}
