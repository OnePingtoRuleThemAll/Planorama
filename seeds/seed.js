const sequelize = require('../config/connection');
const { User, Event } = require('../models');

const userData = require('./userData.json');
const eventData = require('./eventData.json');

const seedDatabase = async () => {
  // Sync the database, dropping and recreating all tables
  await sequelize.sync({ force: true });

  // Bulk create user records
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Bulk create event records
  const events = await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });

  // Associate users with events
  for (const event of events) {
    // Find associated user IDs for the current event
    const associatedUserIds = eventData.find((e) => e.name === event.name)?.users;
    if (associatedUserIds && associatedUserIds.length > 0) {
      // Filter users to include only those with associated IDs
      const usersToAdd = users.filter((user) => associatedUserIds.includes(user.id));

      // Associate the filtered users with the current event
      await event.addUsers(usersToAdd);
    }
  }

  // Exit the script
  process.exit(0);
};

// Call the seedDatabase function
seedDatabase();
