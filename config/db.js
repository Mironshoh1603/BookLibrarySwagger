const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DATABASE connected...");
  })
  .catch((err) => {
    console.log("DB ERROR: ", err);
  });

sequelize.sync({ alter: true });
module.exports = sequelize;
