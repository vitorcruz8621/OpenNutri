import express from "express";
import dotenv from "dotenv";
import nutricionistaRoutes from "./src/routes/nutricionistaRouter.js";
import pacienteRoutes from "./src/routes/pacienteRouter.js";
import statusConsultaRoutes from "./src/routes/statusConsultaRouter.js";
import statusMetaRoutes from "./src/routes/statusMetaRouter.js";
import tipoMetaRoutes from "./src/routes/tipoMetaRouter.js";
import consultaRoutes from "./src/routes/consultaRouter.js";
import metaRoutes from "./src/routes/metaRouter.js";
import sequelize from "./src/configs/db_config.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use("/api", nutricionistaRoutes);
app.use("/api", pacienteRoutes);
app.use("/api", consultaRoutes);
app.use("/api", metaRoutes);
app.use('/api', statusConsultaRoutes);
app.use('/api', statusMetaRoutes);
app.use('/api', tipoMetaRoutes);

if (process.env.NODE_ENV !== 'test') {
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
  console.log(`Servidor rodando na porta ${port}`);
});
}

export default app;