module.exports = {
  "development": {
    "username": "root",
    "password": "rootpass",
    "database": "mevite",
    "host": "localhost",
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
  }
}
