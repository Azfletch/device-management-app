import { Knex, knex } from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

  await knex.schema.createTable('imports', table => {
    table.uuid('import_id', { primaryKey: true })
    table.string('file_path')
    table.string('status')
    table.timestamps(false, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')

  await knex.schema.dropTable('imports')
}