'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

const{ User }= require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        }
      ],
      {}
    );

    const user1 = await User.findOne({ where: { email: 'demo@user.io' }})
    const user2 = await User.findOne({ where: { username: 'FakeUser2' }})
    return queryInterface.bulkInsert(
      'Greetings',
      [
        {
          body: 'Hello, World!',
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Bonjour!',
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Wazzzzzzzup?',
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'How do you do?',
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Hello there!',
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: 'Buenos dias!',
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
      },
      {}
    );
  }
};
