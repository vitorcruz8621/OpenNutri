import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const Consulta = sequelize.define(
  "Consulta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nutricionistaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "nutricionista_id",
      references: {
        model: "Nutricionista",
        key: "id",
      },
    },
    pacienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "paciente_id",
      references: {
        model: "Paciente",
        key: "id",
      },
    },
    dataConsulta: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "data_consulta",
    },
    observacoes: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  {
    tableName: "consulta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default Consulta;
