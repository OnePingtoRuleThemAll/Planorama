const sequelize = require('../config/connection');
const { User, Event } = require('../models');

// Importing JSON data files
const userData = require('./userData.json');
const eventData = require('./eventData.json');

// Function to seed the database with data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Creating users using the userData array
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Creating events using the eventData array
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
  process.exit(0);
};

// Calling the seedDatabase function to seed the data
seedDatabase();
