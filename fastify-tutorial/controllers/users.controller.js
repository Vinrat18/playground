async function listUsers(req, res) {
  const usersCollection = this.mongo.db.collection("users");
  const users = await usersCollection.find({}).toArray();
  res.send(users);
}

async function addUser(req, res) {
  const usersCollection = this.mongo.db.collection("users");
  const { name, age } = req.body;
  const data = { name, age };
  await usersCollection.insertOne(data);
  res.code(201).send(data);
}

module.exports = { listUsers, addUser };
