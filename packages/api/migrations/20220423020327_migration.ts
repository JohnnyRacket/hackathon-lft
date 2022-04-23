import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("invitations", function (table) {
    table.uuid("id").primary().notNullable();
    table.string("team", 255).notNullable();
    table.string("status", 255).notNullable();
    table.string("message").nullable();
    table.uuid("senderId").references("users.id");
    table.uuid("receiverId").references("users.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("roles");
}
