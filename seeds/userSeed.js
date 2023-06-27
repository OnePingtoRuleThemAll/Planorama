const { User } = require('../models');

const userData = [
    {
        "username": "mark123",
        "email": "mark@hotmail.com",
        "password": "pass1234"
    },
    {
        "username": "alain123",
        "email": "alain@gmail.com",
        "password": "pass1234"
    },
    {
        "username": "diana123",
        "email": "diana@yahoo.com",
        "password": "pass1234"
    },
    {
        "username": "richard123",
        "email": "richard@yahoo.com",
        "password": "pass1234"
    },
    {
        "username": "Rachel",
        "email": "rachel@aol.com",
        "password": "pass1234"
    },
    {
        "username": "Jimmy",
        "email": "jimmy@yahoo.com",
        "password": "pass1234"
    },
    {
        "username": "Amanda",
        "email": "amanda@hotmail.com",
        "password": "pass1234"
    },
    {
        "username": "Robert",
        "email": "robert@gmail.com",
        "password": "pass1234"
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  