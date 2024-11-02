import { Injectable } from '@nestjs/common'
import { Link } from './interfaces/link.interface'
import * as snapany from 'snapany'
import { ResourceModel } from './models/resource.model'
import { plainToClass } from 'class-transformer'
import { AppError } from '@/common/exceptions/app-error.exception'

@Injectable()
export class SnapperService {
  async parse(link: Link) {
    const result = await snapany.parse(link.url)
    const resourceModel = plainToClass(ResourceModel, result)
    const resource = resourceModel.data

    if (resourceModel.isSuccessful()) return resource

    throw new AppError(resourceModel.getAppStatus(), resourceModel.getAppMessage())
  }
}
