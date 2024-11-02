import { APP_STATUS } from '@/constants'
import { BaseResponse, ResponseMessage } from './base.response'

export class ErrorResponse extends BaseResponse<null> {
  constructor(code: APP_STATUS, message: ResponseMessage) {
    super(code, message, null)
  }
}
