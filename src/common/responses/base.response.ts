import { APP_STATUS, MESSAGE_SOURCE } from '@/constants'
import { ApiProperty } from '@nestjs/swagger'

export type ResponseMessage = `[${MESSAGE_SOURCE}] ${string}`

export class BaseResponse<T> {
  @ApiProperty({ description: 'Status code' })
  public code: APP_STATUS

  @ApiProperty({ description: 'Status message' })
  public message: ResponseMessage

  @ApiProperty({ description: 'Response data' })
  public data: T

  constructor(code: APP_STATUS, message: ResponseMessage, data: T) {
    this.code = code
    this.message = message
    this.data = data
  }
}
