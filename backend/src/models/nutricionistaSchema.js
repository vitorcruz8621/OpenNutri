import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const Nutricionista = sequelize.define(
  "Nutricionista",
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
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "nutricionista",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default Nutricionista;
