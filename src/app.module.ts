import { Module } from '@nestjs/common'
import { SnapperModule } from './modules/snapper/snapper.module'
import { CoreModule } from './modules/core/core.module'
import { LoggerModule } from 'nestjs-pino'
import { loggerConfig } from './config/logger.config'
import { ConfigModule } from '@nestjs/config'
import { DEV_ENV_FILE, PROD_ENV_FILE } from './config/env.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [PROD_ENV_FILE, DEV_ENV_FILE],
    }),
    LoggerModule.forRoot(loggerConfig),
    CoreModule,
    SnapperModule,
  ],
})
export class AppModule {}
