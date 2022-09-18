const { listUsers, addUser } = require("../controllers/users.controller");
const userSchema = require("../schema/users");

const routeOptions = {
  getUserOpts: {
    schema: {
      response: {
        200: userSchema.usersArray,
      },
    },
    handler: listUsers,
  },
  postUserOpts: {
    schema: {
      response: {
        201: userSchema.user,
      },
    },
    handler: addUser,
  },
};

console.log(JSON.stringify(routeOptions));

async function routes(fastify, options) {
  fastify.get("/users", routeOptions.getUserOpts);
  fastify.post("/users", routeOptions.postUserOpts);
}
module.exports = routes;
