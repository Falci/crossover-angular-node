
exports.up = (knex) => {
  return knex.schema.createTable('auctions', function (t){
    t.bigIncrements().unsigned().primary();
    t.bigInteger('user_id').unsigned().index().references('id').inTable('users');
    t.bigInteger('product_id').unsigned().index().references('id').inTable('products');
    t.integer('quant').notNullable();
    t.integer('bid').notNullable();
    t.timestamp('finish_at');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('auctions');
};
