exports.up = function(knex){
    return knex.schema.createTable('document', function(table){
        table.uuid('id').notNullable();
        table.uuid('user_id').notNullable();
        table.string('name').notNullable();
        table.boolean('deleted').defaultTo(false);
        table.datetime('createdAt');
        table.datetime('deletedAt');
        table.integer('__v');
    });
};
exports.down = function(knex){
    return knex.schema.dropTable('document');
};
