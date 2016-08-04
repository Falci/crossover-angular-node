
exports.up = (knex) => {

  return knex.schema.createTable('products', function (t){
    t.bigIncrements().unsigned().primary();
    t.string('name');
    t.string('icon');
    t.integer('initial');
  }).then(() => {
    return knex('products').insert([
      {name: 'Bread', icon: 'bread', initial: 30},
      {name: 'Carrot', icon: 'carrot', initial: 18},
      {name: 'Diamond', icon: 'diamond', initial: 1}
    ]);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('products');
};
