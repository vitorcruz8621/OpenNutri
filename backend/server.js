import express from "express";
import dotenv from "dotenv";
import nutricionistaRoutes from "./src/routes/nutricionistaRouter.js";
import pacienteRoutes from "./src/routes/pacienteRouter.js";
import consultaRoutes from "./src/routes/consultaRouter.js";
import metaRoutes from "./src/routes/metaRouter.js";
import sequelize from "./src/configs/db_config.js";
import { graphqlHTTP } from "express-graphql";
import schema from "./src/graphql/schema.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
/*app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);*/

app.use("/api", nutricionistaRoutes);
app.use("/api", pacienteRoutes);
app.use("/api", consultaRoutes);
app.use("/api", metaRoutes);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
  console.log(`Servidor rodando na porta ${port}`);
});
