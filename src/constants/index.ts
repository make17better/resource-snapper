import { HttpStatus } from '@nestjs/common'
import { SNAPANY_STATUS } from 'snapany'

export const URL_PATTERN = /https?:\/\/[^\s/$.?#].[^\s]*/i

export enum PROTOCOL {
  HTTP = 'HTTP',
  WS = 'WS',
}

export enum ENV {
  DEV = 'development',
  PROD = 'production',
}

export enum LOG_LEVEL {
  FATAL = 'fatal',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  TRACE = 'trace',
}

export enum MESSAGE_SOURCE {
  NEST = 'NEST',
  APP = 'APP',
}

export enum APP_STATUS {
  SUCCESS = 0,
  UNKNOWN = 10000,
  NOT_FOUND = 20000,
  METHOD_NOT_ALLOWED = 20001,
  VALIDATION_ERROR = 30000,
  FIELD_VALIDATION_ERROR = 30001,
  UNAUTHORIZED = 30002,
  PERMISSION_DENIED = 30003,
  INVALID_RESOURCE = 40000,
  UNSUPPORTED_PLATFORM = 40001,
  INVALID_URL = 40002,
}

export enum APP_MESSAGE {
  SUCCESS = 'Success',
  UNKNOWN = 'Internal server error',
  NOT_FOUND = 'Resource not found',
  METHOD_NOT_ALLOWED = 'Method not allowed',
  VALIDATION_ERROR = 'Validation error',
  FIELD_VALIDATION_ERROR = 'Invalid field value',
  UNAUTHORIZED = 'Unauthorized user',
  PERMISSION_DENIED = 'Permission denied',
  INVALID_RESOURCE = 'Invalid resource',
  UNSUPPORTED_PLATFORM = 'Unsupported platform',
  INVALID_URL = 'Invalid URL',
}

export const APP_MESSAGE_MAPPING = {
  [APP_STATUS.SUCCESS]: APP_MESSAGE.SUCCESS,
  [APP_STATUS.UNKNOWN]: APP_MESSAGE.UNKNOWN,
  [APP_STATUS.NOT_FOUND]: APP_MESSAGE.NOT_FOUND,
  [APP_STATUS.METHOD_NOT_ALLOWED]: APP_MESSAGE.METHOD_NOT_ALLOWED,
  [APP_STATUS.VALIDATION_ERROR]: APP_MESSAGE.VALIDATION_ERROR,
  [APP_STATUS.FIELD_VALIDATION_ERROR]: APP_MESSAGE.FIELD_VALIDATION_ERROR,
  [APP_STATUS.UNAUTHORIZED]: APP_MESSAGE.UNAUTHORIZED,
  [APP_STATUS.PERMISSION_DENIED]: APP_MESSAGE.PERMISSION_DENIED,
  [APP_STATUS.INVALID_RESOURCE]: APP_MESSAGE.INVALID_RESOURCE,
  [APP_STATUS.UNSUPPORTED_PLATFORM]: APP_MESSAGE.UNSUPPORTED_PLATFORM,
  [APP_STATUS.INVALID_URL]: APP_MESSAGE.INVALID_URL,
}

export const APP_STATUS_MAPPING = {
  [APP_STATUS.SUCCESS]: HttpStatus.OK,
  [APP_STATUS.UNKNOWN]: HttpStatus.INTERNAL_SERVER_ERROR,
  [APP_STATUS.NOT_FOUND]: HttpStatus.NOT_FOUND,
  [APP_STATUS.METHOD_NOT_ALLOWED]: HttpStatus.METHOD_NOT_ALLOWED,
  [APP_STATUS.VALIDATION_ERROR]: HttpStatus.BAD_REQUEST,
  [APP_STATUS.FIELD_VALIDATION_ERROR]: HttpStatus.BAD_REQUEST,
  [APP_STATUS.UNAUTHORIZED]: HttpStatus.UNAUTHORIZED,
  [APP_STATUS.PERMISSION_DENIED]: HttpStatus.FORBIDDEN,
  [APP_STATUS.INVALID_RESOURCE]: HttpStatus.BAD_REQUEST,
  [APP_STATUS.UNSUPPORTED_PLATFORM]: HttpStatus.BAD_REQUEST,
  [APP_STATUS.INVALID_URL]: HttpStatus.BAD_REQUEST,
}

export const SNAPANY_STATUS_MAPPING = {
  [SNAPANY_STATUS.SUCCESS]: APP_STATUS.SUCCESS,
  [SNAPANY_STATUS.INVALID_RESOURCE]: APP_STATUS.INVALID_RESOURCE,
  [SNAPANY_STATUS.UNSUPPORTED_PLATFORM]: APP_STATUS.UNSUPPORTED_PLATFORM,
  [SNAPANY_STATUS.INVALID_URL]: APP_STATUS.INVALID_RESOURCE,
  [SNAPANY_STATUS.UNKNOWN]: APP_STATUS.UNKNOWN,
}

export const SNAPANY_MESSAGE_MAPPING = {
  [SNAPANY_STATUS.SUCCESS]: APP_MESSAGE.SUCCESS,
  [SNAPANY_STATUS.INVALID_RESOURCE]: APP_MESSAGE.INVALID_RESOURCE,
  [SNAPANY_STATUS.UNSUPPORTED_PLATFORM]: APP_MESSAGE.UNSUPPORTED_PLATFORM,
  [SNAPANY_STATUS.INVALID_URL]: APP_MESSAGE.INVALID_URL,
  [SNAPANY_STATUS.UNKNOWN]: APP_MESSAGE.UNKNOWN,
}

export const FALLBACK_CONSTRAINT = 'Unknown constraint'
