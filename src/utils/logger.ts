import { pino } from 'pino'

export const devLogger = pino({
  transport: {
    target: 'pino-pretty',
  },
})
