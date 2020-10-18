exports.up = function (knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.string('id');
            table.string('name', 100).notNullable();
            table.string('surname', 100).notNullable();
            table.string('email', 255).notNullable();
            table.string('gender', 30);
            table.string('avatar', 355);
            table.date('birthdate').notNullable();
            table.boolean('deleted').defaultTo(false);
            table.datetime('createdAt');
            table.datetime('deletedAt');
            table.integer('__v');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('users');
};
