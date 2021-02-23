'use strict';
module.exports = (sequelize, DataTypes) => {
  const Greeting = sequelize.define('Greeting', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Greeting.associate = function(models) {
    // associations can be defined here
  };
  return Greeting;
};