import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync(path.resolve(__dirname, "../../ca.crt")).toString(),
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
