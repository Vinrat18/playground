const { MongoClient } = require("mongodb");

class DB {
  _db;;

  constructor() {
    const client = new MongoClient(process.env.CONNECT_DB);
    this._db = client.db('playground');
  }

  db = () => this._db

  users = () => this._db.collection('users')
}

module.exports = { DB };
