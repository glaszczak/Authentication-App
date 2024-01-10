import type { Config } from 'drizzle-kit'
import { ENV } from './src/config/env'

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: ENV.DATABASE_CONNECTION,
  },
  breakpoints: false,
} satisfies Config
