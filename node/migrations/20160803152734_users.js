
exports.up = (knex) => {
  const INITIAL_COINS = 1000;

  return knex.schema.createTable('users', function (t){
    t.bigIncrements().unsigned().primary();
    t.string('username');
    t.integer('coins').defaultTo(INITIAL_COINS);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
