import Sequelize from "sequelize";

export const sequelize = new Sequelize("disney", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

