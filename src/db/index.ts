import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { ENV } from '../config/env.js'

export const migrationClient = drizzle(
  postgres(ENV.DATABASE_CONNECTION, { max: 3 })
)

export const db = drizzle(postgres(ENV.DATABASE_CONNECTION))
