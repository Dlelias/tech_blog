const { __esModule } = require("uuid/dist/rng");
const { User } = require("../models");

const userData = [
  {
    username: "Delmy",
    password: "Password1234",
  },
  {
    username: "Maria",
    password: "Otherpassword1",
  },
  {
      username: "Tyson",
      password: 'Lalala1234'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;



