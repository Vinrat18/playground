const usersArray = {
  type: "array",
  items: {
    type: "object",
    properties: {
      _id: { type: "string" },
      name: { type: "string" },
    },
  },
};

const user = {
  type: "object",
  properties: {
    _id: { type: "string" },
    name: { type: "string" },
  },
};

module.exports = { usersArray, user };
