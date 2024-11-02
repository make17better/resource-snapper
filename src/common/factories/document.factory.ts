import { API_VERSION } from '@/config/app.config'
import { SWAGGER_DESCRIPTION, SWAGGER_TITLE } from '@/config/swagger.config'
import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const config = new DocumentBuilder().setTitle(SWAGGER_TITLE).setDescription(SWAGGER_DESCRIPTION).setVersion(API_VERSION).build()

export const documentFactory = (app: INestApplication) => SwaggerModule.createDocument(app, config)
