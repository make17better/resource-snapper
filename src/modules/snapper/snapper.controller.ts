import { Controller, Get, HttpStatus, Query, UseInterceptors } from '@nestjs/common'
import { SnapperService } from './snapper.service'
import { SnapDto } from './dto/snap.dto'
import { APP_MESSAGE } from '@/constants'
import { CacheInterceptor } from '@nestjs/cache-manager'
import { TimeoutInterceptor } from './interceptors/timeout.interceptor'
import { ApiResponse } from '@nestjs/swagger'
import { SuccessResponse } from '@/common/responses/success.response'
import { ParseData } from 'snapany'
import { SnapResponseSchema } from './schemas/snap.response.schema'

@Controller('snapper')
@UseInterceptors(TimeoutInterceptor)
@UseInterceptors(CacheInterceptor)
export class SnapperController {
  constructor(private readonly snapperService: SnapperService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: APP_MESSAGE.SUCCESS,
    schema: SnapResponseSchema,
  })
  @Get('snap')
  async snap(@Query() snapDto: SnapDto): Promise<SuccessResponse<ParseData>> {
    const link = snapDto.toLink()
    const resource = await this.snapperService.parse(link)

    return new SuccessResponse(resource)
  }
}
