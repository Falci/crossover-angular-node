require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    debug: true,
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'ebid'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
