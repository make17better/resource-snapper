import { mToMs, parseConfigInt } from '@/utils'

export const SNAPPER_CACHE_TTL = mToMs(parseConfigInt(process.env.SNAPPER_CACHE_TTL_MINUTES, 5))

export const SNAPPER_CACHE_MAX = parseConfigInt(process.env.SNAPPER_CACHE_MAX_ITEMS, 1000)

export const SNAPPER_TIMEOUT = mToMs(parseConfigInt(process.env.SNAPPER_TIMEOUT_SECONDS, 10))
