import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const Paciente = sequelize.define(
  "Paciente",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "data_nascimento",
    },
    telefone: {
      type: DataTypes.STRING(20),
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
    tableName: "paciente",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default Paciente;
