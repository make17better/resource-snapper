import { APP_MESSAGE, APP_STATUS, SNAPANY_MESSAGE_MAPPING, SNAPANY_STATUS_MAPPING } from '@/constants'
import { Expose } from 'class-transformer'
import { ParseData, SNAPANY_STATUS } from 'snapany'

export class ResourceModel {
  @Expose()
  readonly code!: SNAPANY_STATUS

  @Expose()
  readonly message!: string

  @Expose()
  readonly data!: ParseData

  public isSuccessful(): boolean {
    return this.code === SNAPANY_STATUS.SUCCESS
  }

  public getAppStatus(): APP_STATUS {
    return SNAPANY_STATUS_MAPPING[this.code]
  }

  public getAppMessage(): APP_MESSAGE {
    return SNAPANY_MESSAGE_MAPPING[this.code]
  }
}
