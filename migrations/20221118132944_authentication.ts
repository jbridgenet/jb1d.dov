import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', function (table) {
    table.dropColumn('text')
    table.string('email').unique()
    table.string('password')

    table.string('googleId')

    table.string('facebookId')

    table.string('twitterId')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', function (table) {
    table.string('text')
    table.dropColumn('email')
    table.dropColumn('password')

    table.dropColumn('googleId')

    table.dropColumn('facebookId')

    table.dropColumn('twitterId')
  })
}
