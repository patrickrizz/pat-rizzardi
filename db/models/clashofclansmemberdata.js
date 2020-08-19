'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClashOfClansMemberData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClashOfClansMemberData.init({
    memberId: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    trophies: DataTypes.INTEGER,
    donationSent: DataTypes.INTEGER,
    donationReceived: DataTypes.INTEGER,
    numOfAttacks: DataTypes.INTEGER,
    numOfWars: DataTypes.INTEGER,
    numOfStars: DataTypes.INTEGER,
    avgAttackRate: DataTypes.INTEGER,
    avgStarRate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClashOfClansMemberData',
  });
  return ClashOfClansMemberData;
};