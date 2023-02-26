import { Knex, knex } from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('devices', table => {
    table.uuid('device_id', { primaryKey: true })
    table.text('name').notNullable()
    table.text('address')
    table.string('longitude')
    table.string('latitude')
    table.string('device_type').notNullable()
    table.string('manufacturer').notNullable()
    table.string('model').notNullable()
    table.timestamp('install_date')
    table.text('note')
    table.string('eui')
    table.string('serial_number')
    table.uuid('import_id')
    table.timestamps(false, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('devices')
}