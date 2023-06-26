const sequelize = require('../config/connection');


const userSeed = require('./userSeed');
const postSeed = require('./postSeed');
const commentSeed = require('./commentSeed');


const seedDatabase = async () => {
    await sequelize.sync({force: true});
    //console.log("\n----- DATABASE SYNCED ----- \n");

    await userSeed();
    console.log("\n----- USER SEEDED ----- \n");

    await postSeed();
    console.log("\n----- POST SEEDED ----- \n");

    await commentSeed();
    console.log("\n----- COMMENT SEEDED ----- \n");

    process.exit(0);
}

seedDatabase();