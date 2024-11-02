import { Module, OnModuleInit } from '@nestjs/common'
import { APP_FILTER, APP_PIPE } from '@nestjs/core'
import { HttpExceptionFilter } from '@/common/filters/http-exception.filter'
import { FieldValidationPipe } from '@/common/pipes/validation.pipe'
import { ProcessEventHandler } from './events/process.event'

@Module({
  providers: [ProcessEventHandler, { provide: APP_FILTER, useClass: HttpExceptionFilter }, { provide: APP_PIPE, useClass: FieldValidationPipe }],
})
export class CoreModule implements OnModuleInit {
  constructor(private readonly processEventHandler: ProcessEventHandler) {}

  onModuleInit() {
    this.processEventHandler.register()
  }
}
