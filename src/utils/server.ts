import fastify from 'fastify'
import { devLogger } from './logger.js'

export async function buildServer() {
  const app = fastify({
    logger: process.env.NODE_ENV == 'dev' ? devLogger : true,
  })

  // register plugins

  // register routes

  return app
}
