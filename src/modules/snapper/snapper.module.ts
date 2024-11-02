import { Module } from '@nestjs/common'
import { SnapperService } from './snapper.service'
import { SnapperController } from './snapper.controller'
import { CacheModule } from '@nestjs/cache-manager'
import { SNAPPER_CACHE_MAX, SNAPPER_CACHE_TTL } from '@/config/service.config'

@Module({
  imports: [
    CacheModule.register({
      ttl: SNAPPER_CACHE_TTL,
      max: SNAPPER_CACHE_MAX,
    }),
  ],
  controllers: [SnapperController],
  providers: [SnapperService],
})
export class SnapperModule {}
