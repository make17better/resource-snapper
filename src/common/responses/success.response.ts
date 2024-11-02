import { APP_MESSAGE, APP_STATUS, MESSAGE_SOURCE } from '@/constants'
import { BaseResponse } from './base.response'
import { tagSource } from '@/utils'

export class SuccessResponse<T> extends BaseResponse<T> {
  constructor(data: T) {
    super(APP_STATUS.SUCCESS, tagSource(MESSAGE_SOURCE.APP, APP_MESSAGE.SUCCESS), data)
  }
}
