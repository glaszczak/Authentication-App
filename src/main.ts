import { ENV } from './config/env.js'
import { buildServer } from './utils/server.js'
import { migrationClient } from './db/index.js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

async function main() {
  const app = await buildServer()

  await app.listen({
    port: ENV.PORT,
    host: ENV.HOST,
  })

  await migrate(migrationClient, { migrationsFolder: './migrations' })
}

main()
