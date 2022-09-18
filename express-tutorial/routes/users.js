const { RouterAsync } = require("./routerAsync");

const userRouter = new RouterAsync();

userRouter.get("/", async (req, res) => {
  const usersCon = req.app.db.users();
  const users = await usersCon.find({}).toArray();
  res.send(users);
});

const ur = userRouter.asyncRouter();

module.exports = ur;
