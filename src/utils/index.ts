import { MESSAGE_SOURCE } from '@/constants'

export type TaggedMessage<T extends string = string> = `[${MESSAGE_SOURCE}] ${T}`

export const tagSource = <T extends string = string>(source: MESSAGE_SOURCE, message: T): TaggedMessage<T> => {
  return `[${source}] ${message}`
}

export const mToMs = (m: number): number => m * 60 * 1000

export const parseConfigInt = (value: string | number | undefined, defaultValue: number): number => {
  if (value === undefined) return defaultValue

  const parsed = parseInt(String(value), 10)
  return isNaN(parsed) ? defaultValue : parsed
}
