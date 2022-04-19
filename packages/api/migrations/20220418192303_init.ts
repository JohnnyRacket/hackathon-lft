import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('roles', function (table) {
            table.string('name').primary();
        })
        .createTable('users', function (table) {
            table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
            table.string('firstName', 255).notNullable();
            table.string('lastName', 255).notNullable();
            table.string('team', 255).nullable();
            table.string('email', 255).notNullable();
            table.string('roleName').references('roles.name');
            table.timestamps(true, true, true);
        })
        .createTable('skills', function (table) {
            table.string('name').primary();
        })
        .createTable('userSkills', function (table) {
            table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
            table.string('skillName').references('skills.name');
            table.uuid('userId').references('users.id');
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable('roles')
        .dropTable('users')
        .dropTable('skills')
        .dropTable('userSkills');
}

