exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (table) => {
    table.increments()
    table.string('city')
    table.string('trip_length')
    table.specificType('restaurants', 'text[]')
    table.specificType('activities', 'text[]')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cities')
};
