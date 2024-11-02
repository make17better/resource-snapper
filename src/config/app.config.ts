export const API_VERSION = 'v1'

export const API_FULL_PATH_PREFIX = [process.env.API_PATH_PREFIX, API_VERSION].filter(Boolean).join('/')
