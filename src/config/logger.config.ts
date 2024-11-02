import { Params } from 'nestjs-pino'
import { LOG_LEVEL, PROTOCOL } from '@/constants'
import { randomUUID } from 'crypto'
import { join } from 'path'
import { HttpStatus } from '@nestjs/common'
import { parseConfigInt } from '@/utils'

const DIR = process.env.LOG_DIR || 'logs'
const MAX_SIZE = process.env.LOG_MAX_SIZE || '10m'
const MAX_FILES = parseConfigInt(process.env.LOG_MAX_FILES, 30)
const LEVEL = process.env.LOG_LEVEL || LOG_LEVEL.INFO

export const loggerConfig: Params = {
  pinoHttp: {
    transport: {
      targets: [
        {
          target: 'pino-pretty',
          level: LEVEL,
          options: {
            colorize: true,
            levelFirst: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss.l',
            singleLine: true,
            messageFormat: '[{context}] {msg}',
            ignore: 'pid,hostname,context,req,res,responseTime',
          },
        },
        {
          target: 'pino-roll',
          level: LEVEL,
          options: {
            file: join(DIR, 'app'),
            frequency: 'daily',
            size: MAX_SIZE,
            limit: {
              count: MAX_FILES,
            },
            dateFormat: 'yyyy-MM-dd',
            extension: '.log',
            mkdir: true,
          },
        },
      ],
    },

    customProps: (req, _res) => ({
      context: req.headers?.upgrade ? PROTOCOL.WS : PROTOCOL.HTTP,
    }),

    customLogLevel: (_req, res, _err) => {
      if (res.statusCode >= HttpStatus.BAD_REQUEST && res.statusCode < HttpStatus.INTERNAL_SERVER_ERROR) return LOG_LEVEL.WARN
      if (res.statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) return LOG_LEVEL.ERROR
      return LOG_LEVEL.INFO
    },

    customSuccessMessage: (req, res, responseTime) => {
      return `${req.method} ${res.statusCode} ${req.url} ${responseTime}ms`
    },

    customErrorMessage: (req, res, err) => {
      return `${req.method} ${res.statusCode} ${req.url} ${err.message}`
    },

    genReqId: () => randomUUID(),

    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url,
          query: req.query,
          params: req.params,
          body: req.body,
          headers: {
            'user-agent': req.headers['user-agent'],
            'x-forwarded-for': req.headers['x-forwarded-for'],
          },
        }
      },
      err(error) {
        return {
          name: error.name,
          message: error.message,
          stack: error.stack,
        }
      },
    },

    redact: {
      paths: ['req.headers.authorization', 'req.headers.cookie', 'req.body.password'],
      censor: '[REDACTED]',
    },
  },
}
