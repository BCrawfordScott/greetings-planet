'use strict';
module.exports = (sequelize, DataTypes) => {
  const Greeting = sequelize.define('Greeting', {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Greeting.associate = function(models) {
    Greeting.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  };
  return Greeting;
};
