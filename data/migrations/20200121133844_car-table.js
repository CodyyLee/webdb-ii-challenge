
exports.up = function(knex) {
  return(knex.schema.createTable('car-table', table => {
      table.increments();

      table.integer('VIN');

      table.string('Make', 255);

      table.string('Model', 255).index();

      table.integer('Mileage');

      table.string('Transmission_Type', 255);

      table.string('Title_Status', 255);

      table.timestamps(true, true);
  }))
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-table');
};
