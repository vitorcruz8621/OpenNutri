import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const StatusConsulta = sequelize.define(
  "StatusConsulta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "status_consulta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default StatusConsulta;
