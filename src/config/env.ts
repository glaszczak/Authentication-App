import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  PORT: z.number().default(3000),
  HOST: z.string().default('0.0.0.0'),
  DATABASE_CONNECTION: z.string(),
})

export const ENV = envSchema.parse({
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
  HOST: process.env.HOST,
  DATABASE_CONNECTION: process.env.DATABASE_CONNECTION,
})
