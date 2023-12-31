const sequelize = require('../config/connection');
const { User, Event } = require('../models');


const userData = require('./userData.json');
const eventData = require('./eventData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

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

seedDatabase();
