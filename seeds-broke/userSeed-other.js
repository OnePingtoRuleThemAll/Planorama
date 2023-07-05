const { User } = require('../models');

const userData = [
    {
        username: "mark123",
        email: "mark@hotmail.com",
        password: "pass1234",
        firstName: "Mark",
        lastName: "Awa",
        birthday: "2010-10-22",
        twitter: "@MarkA"
    },
    {
        username: "alain123",
        email: "alain@gmail.com",
        password: "pass1234",
        firstName: "Alain",
        lastName: "Chau",
        birthday: "2010-05-25",
        twitter: "@alainC"
    },
    {
        "username": "diana123",
        "email": "diana@yahoo.com",
        "password": "pass1234",
        "firstName": "Diana",
        "lastName": "Dang",
        "birthday": "2004-05-01",
        "twitter": "@DianaD"
    },
    {
        "username": "richard123",
        "email": "richard@yahoo.com",
        "password": "pass1234",
        "firstName": "Rich",
        "lastName": "Meow",
        "birthday": "1992-05-07",
        "twitter": "@RichM"
    },
    {
        "username": "Rachel",
        "email": "rachel@aol.com",
        "password": "pass1234",
        "firstName": "Rachel",
        "lastName": "Blind",
        "birthday": "1990-01-18",
        "twitter": "@alainC"
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  