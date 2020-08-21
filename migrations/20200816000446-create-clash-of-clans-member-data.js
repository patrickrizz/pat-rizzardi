'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ClashOfClansMemberData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      trophies: {
        type: Sequelize.INTEGER
      },
      donationSent: {
        type: Sequelize.INTEGER
      },
      donationReceived: {
        type: Sequelize.INTEGER
      },
      numOfAttacks: {
        type: Sequelize.INTEGER
      },
      numOfWars: {
        type: Sequelize.INTEGER
      },
      numOfStars: {
        type: Sequelize.INTEGER
      },
      avgAttackRate: {
        type: Sequelize.INTEGER
      },
      avgStarRate: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ClashOfClansMemberData');
  }
};