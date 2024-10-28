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
      validate: {
        is: /^[a-z]+\.[a-z]+@gmail\.com$/i,
      }
    },
    dataNascimento: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "data_nascimento",
      validate: {
        is: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/gm,
      }
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
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
