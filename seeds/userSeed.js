const { User } = require('../models');

const userData = [
    {
        "name": "Mark",
        "email": "mark@hotmail.com",
        "password": "pass1234"
    },
    {
        "name": "Alain",
        "email": "alain@gmail.com",
        "password": "pass1234"
    },
    {
        "name": "Diana",
        "email": "diana@yahoo.com",
        "password": "pass1234"
    },
    {
        "name": "Richard",
        "email": "richard@yahoo.com",
        "password": "pass1234"
    },
    {
        "name": "Rachel",
        "email": "rachel@aol.com",
        "password": "pass1234"
    },
    {
        "name": "Jimmy",
        "email": "jimmy@yahoo.com",
        "password": "pass1234"
    },
    {
        "name": "Amanda",
        "email": "amanda@hotmail.com",
        "password": "pass1234"
    },
    {
        "name": "Robert",
        "email": "robert@gmail.com",
        "password": "pass1234"
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  