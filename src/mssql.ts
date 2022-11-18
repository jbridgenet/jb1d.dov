import knex from 'knex'
import type { Knex } from 'knex'
import type { Application } from './declarations'

declare module './declarations' {
  interface Configuration {
    mssqlClient: Knex
  }
}

export const mssql = (app: Application) => {
  const config = app.get('mssql')
  const db = knex(config!)

  app.set('mssqlClient', db)
}
