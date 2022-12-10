import knex from 'knex'
import type { Knex } from 'knex'
import _ from 'lodash'
import type { Application } from './declarations'

declare module './declarations' {
  interface Configuration {
    mssqlClient: Knex
  }
}

// export const mssql = (app: Application) => {
//   const config = app.get('mssql')
//   const db = knex(config!)

//   app.set('mssqlClient', db)
// }

export const mssql = (app: Application) => {
  let config = app.get('mssql')
  config = _.assign(config, {
    host: '192.168.86.150',
    server: 'win2019\\SQLEXPRESS',
    database: 'jb1d' ,
    pool: {
      min: 0,
      max: 7
    },
    options: {
      port: 61083, //dynamic port
    }
  })

  const db = knex(config!)

  app.set('mssqlClient', db)
}