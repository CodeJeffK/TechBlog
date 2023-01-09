const { User } = require('../models');

const userData = [
  {
    username: "Jeff",
    email: "jeff@gmail.com",
    password: "password1234"
  },
  {
    username: "David",
    email: "david@gmail.com",
    password: "password1234"
  },
  {
    username: "Donovan",
    email: "donovan@gmail.com",
    password: "password1234"
  },
  {
    username: "Ashley",
    email: "ashley@gmail.com",
    password: "password1234"
  },
  {
    username: "Curtis",
    email: "curtis@gmail.com",
    password: "password1234"
  }
];

//  IMPORTANT seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;