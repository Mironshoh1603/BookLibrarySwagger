const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const book = sequelize.define(
  "books",
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      min: 1,
    },
    author: {
      type: Sequelize.DataTypes.STRING,
      len: [3, 50],
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
  }
);

module.exports = book;
