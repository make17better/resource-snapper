import { APP_STATUS } from '@/constants'
import { AppError } from './app-error.exception'

export class UnsupportedPlatformError extends AppError {
  constructor(cause?: string) {
    super(APP_STATUS.UNSUPPORTED_PLATFORM, cause)
  }
}
