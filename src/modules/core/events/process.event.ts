import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { mToMs } from '@/utils'

@Injectable()
export class ProcessEventHandler {
  private readonly GRACEFUL_SHUTDOWN_TIMEOUT = mToMs(1)

  constructor(private readonly logger: PinoLogger) {
    this.logger.setContext('ProcessEvents')
  }

  public register(): void {
    this.handleUncaughtException()
    this.handleUnhandledRejection()
    this.handleExit()
    this.handleSigterm()

    this.logger.info('Registered process events')
  }

  private handleUncaughtException(): void {
    process.on('uncaughtException', (error: Error) => {
      this.logger.error(
        {
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
          },
        },
        'Uncaught Exception',
      )
      this.gracefulShutdown(1)
    })
  }

  private handleUnhandledRejection(): void {
    process.on('unhandledRejection', (reason: unknown, promise: Promise<unknown>) => {
      this.logger.warn(
        {
          reason,
          promise,
        },
        'Unhandled Promise Rejection',
      )
    })
  }

  private handleExit(): void {
    process.on('exit', (code: number) => {
      this.logger.info({ code }, 'Process exiting')
    })
  }

  private handleSigterm(): void {
    process.on('SIGTERM', () => {
      this.logger.info('SIGTERM signal received')
      this.gracefulShutdown(0)
    })
  }

  private gracefulShutdown(code: number): void {
    setTimeout(() => process.exit(code), this.GRACEFUL_SHUTDOWN_TIMEOUT)
  }
}
