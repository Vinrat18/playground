const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");

dotenv.config();

fastify.register(require("fastify-mongodb"), {
  url: process.env.CONNECT_DB,
});

fastify.get("/", function (req, res) {
  res.send("hello Vinrat!!!...");
});

fastify.register(require("./routes/users"));

fastify.listen(5000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
