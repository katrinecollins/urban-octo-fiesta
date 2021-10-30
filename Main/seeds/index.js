const seedUsers = require('./user-seeds');
const seedPosts = require('./posts-seeds');
const seedComments = require('./comments-seeds');
const seedVotes = require('./votes-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();