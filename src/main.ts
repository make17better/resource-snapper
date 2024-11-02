import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import { Logger } from 'nestjs-pino'
import { SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { documentFactory } from './common/factories/document.factory'
import { API_FULL_PATH_PREFIX } from './config/app.config'
import { ALLOWED_ORIGINS, PORT } from './config/server.config'
import { SWAGGER_PATH_PREFIX } from './config/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true })

  app.use(helmet())
  app.useLogger(app.get(Logger))
  app.enableCors({
    origin: ALLOWED_ORIGINS,
  })
  app.setGlobalPrefix(API_FULL_PATH_PREFIX)
  SwaggerModule.setup(SWAGGER_PATH_PREFIX, app, documentFactory(app))

  await app.listen(PORT)
}
bootstrap()
