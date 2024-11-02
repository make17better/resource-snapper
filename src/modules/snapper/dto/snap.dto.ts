import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'
import { IsUrl, Length } from 'class-validator'
import { Link } from '../interfaces/link.interface'
import { SNAP_EXAMPLES } from '../fixtures'

export class SnapDto {
  @ApiProperty({
    description: 'The URL to be snapped',
    example: SNAP_EXAMPLES.BILIBILI.url,
  })
  @Transform(({ value }) => value?.trim(), { toClassOnly: true })
  @Expose()
  @IsUrl({
    protocols: ['http', 'https'],
    require_protocol: true,
  })
  @Length(1, 2048)
  readonly url!: string

  public toLink(): Link {
    return { url: this.url }
  }
}
