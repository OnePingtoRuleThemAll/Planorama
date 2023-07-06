// Importing necessary dependencies and files
const sequelize = require('../config/connection');
const { User, Event } = require('../models');
const userData = require('./userData.json');
const eventData = require('./eventData.json');

// Function to seed the database
const seedDatabase = async () => {
  // Synchronize the database by creating tables
  await sequelize.sync({ force: true });

  // Create user records in the database
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Create event records in the database
  const event = await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });

  /*
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  */

  // Exit the Node.js process
  process.exit(0);
};
