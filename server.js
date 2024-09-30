import express from "express";
import dotenv from "dotenv";
import nutricionistaRoutes from "./src/routes/nutricionistaRouter.js";
import sequelize from "./src/configs/db_config.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", nutricionistaRoutes);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
  console.log(`Servidor rodando na porta ${port}`);
});
