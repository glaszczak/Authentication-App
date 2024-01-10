import { ENV } from './config/env.js'
import { buildServer } from './utils/server.js'

async function main() {
  const app = await buildServer()

  await app.listen({
    port: ENV.PORT,
    host: ENV.HOST,
  })
}

main()
