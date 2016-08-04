
exports.up = (knex) => {
  return knex.schema.createTable('inventory', function (t){
    t.bigIncrements().unsigned().primary();
    t.bigInteger('user_id').unsigned().index().references('id').inTable('users');
    t.bigInteger('product_id').unsigned().index().references('id').inTable('products');
    t.integer('quant').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('inventory');
};
