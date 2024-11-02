import { APP_MESSAGE, APP_STATUS, MESSAGE_SOURCE } from '@/constants'
import { tagSource } from '@/utils'
import { SNAP_TEST_CASES } from '../fixtures'

export const SnapResponseSchema = {
  type: 'object',
  properties: {
    code: {
      type: 'number',
      example: APP_STATUS.SUCCESS,
    },
    message: {
      type: 'string',
      example: tagSource(MESSAGE_SOURCE.APP, APP_MESSAGE.SUCCESS),
    },
    data: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: SNAP_TEST_CASES.VALID.expected.title,
          nullable: true,
        },
        resource: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              example: SNAP_TEST_CASES.VALID.expected.resource.type,
              nullable: true,
            },
            url: {
              type: 'string',
              example: SNAP_TEST_CASES.VALID.expected.resource.url.example,
              nullable: true,
            },
          },
        },
        preview: {
          type: 'object',
          properties: {
            url: {
              type: 'string',
              example: SNAP_TEST_CASES.VALID.expected.preview.url,
              nullable: true,
            },
          },
        },
      },
      nullable: true,
    },
  },
}
