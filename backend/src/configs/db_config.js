import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Autenticação bem-sucedida.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};

authenticateDatabase();

export default sequelize;
