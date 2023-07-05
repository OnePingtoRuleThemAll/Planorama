
const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userSeed = require('./userSeed');
const eventSeed = require('./eventSeed');



const seedDatabase = async () => {
    await sequelize.sync({force: true});
    console.log("\n----- DATABASE SYNCED ----- \n");

    await userSeed();
    console.log("\n----- USER SEEDED ----- \n");

    //await eventSeed();
    console.log("\n----- POST SEEDED ----- \n");

    process.exit(0);
}

seedDatabase();