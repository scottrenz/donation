require('dotenv').config();

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: { filename: './database/SpeakOut.db3' },
    // connection: { filename: './database/donation.db3' },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//       tableName: 'dbmigrations',
//     },
//     seeds: { directory: './database/seeds' },
//   },
// };


// const pgSettings = {

//   host: "speakoutstaging.cswncgslisak.us-east-1.rds.amazonaws.com",

//   user: "postgres",

//   password: "speakoutaws",

//   port: 5432,

//   database: "speakout"

// };



// module.exports = {
//   development: {
//     client: 'pg',
//  http://127.0.0.1:53066/browser/#
    // connection: 'postgres://localhost:5432/postgres',
    // connection: { filename: './database/donation.db3' },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//       tableName: 'dbmigrations',
//     },
//     seeds: { directory: './database/seeds' },
//   },
// };

// module.exports = {
//   development: {
//     client: 'pg',
//     connection:'postgres://localhost/<examples>',
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds/dev'
//     },
//     useNullAsDefault: true
//   },

//   test: {
//     client: 'pg',
//     connection:'postgres://localhost/<examples_test>',
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds/test'
//     },
//     useNullAsDefault: true
//   },

//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds/production'
//     },
//     useNullAsDefault: true
//   }
// }

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       port: 5432,
//       host: "speakoutstaging.cswncgslisak.us-east-1.rds.amazonaws.com",
//       database: "speakout",
//       user: "postgres",
//       password: process.env.DB_PASS
//     },
//     pool: {
//       min: process.env.DATABASE_POOL_MIN,
//       max: process.env.DATABASE_POOL_MAX,
//     },
//     migrations: {
//       directory: './db/migrations',
//       tableName: 'knex_migrations',
//     },
//     seeds: {
//       directory: './db/seeds',
//     },
//   }
// }
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: process.env.DB_HOST,
      database: process.env.DB_DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  }
}


// const pgSettings = {

//   host: "speakoutstaging.cswncgslisak.us-east-1.rds.amazonaws.com",

//   user: "postgres",

//   password: "speakoutaws",

//   port: 5432,

//   database: "speakout"

// };

