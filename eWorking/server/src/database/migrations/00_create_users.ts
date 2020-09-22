import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('cidade').notNullable();
        table.string('uf').notNullable();
        table.string('profissao').notNullable();
        table.string('skills').notNullable();
        table.string('cost').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();
        table.string('contratacao').notNullable();
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}