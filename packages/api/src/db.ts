import { Knex, knex } from 'knex'

const CLEAN_TABLES = [
  'providers'
]

export const getConfig = (): Knex.Config => {
  const searchPath = process.env.NODE_ENV ? process.env.NODE_ENV : 'public'

  return {
    log: {
      // https://github.com/knex/knex/issues/3921
      warn: () => { }
    },
    client: 'postgresql',
    asyncStackTraces: true,
    connection: process.env.DATABASE_URL ?? 'postgres://root:password@localhost:5432/app',
    searchPath: [searchPath as string],
    migrations: {
      directory: `${__dirname}/migrations`
    }
  }
}

export const getConnection = () => knex(getConfig())

export const setup = async () => {
  const db = getConnection()

  await db.raw(`CREATE SCHEMA IF NOT EXISTS ${getConfig().searchPath};`)
  await db.migrate.latest()

  await db.destroy()
}

export const clean = async () => {
  const db = getConnection()

  await Promise.all(CLEAN_TABLES.map((tableName) => {
    return db.raw('TRUNCATE TABLE ?? CASCADE', [tableName]);
  }))

  await db.destroy()
}