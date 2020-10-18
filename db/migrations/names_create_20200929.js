exports.up = function(knex){
    return knex.schema.createTable('name', function(table){
        table.uuid('id', 255);
        table.string('first_name', 255);
        table.boolean('deleted').defaultTo(false);
        table.datetime('createdAt');
        table.datetime('deletedAt');
        table.integer('__v');
    });
};

exports.down = function(knex){
    return knex.schema.dropTable('name');
};
