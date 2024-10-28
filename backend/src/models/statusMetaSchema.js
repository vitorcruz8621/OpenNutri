import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const StatusMeta = sequelize.define(
  "StatusMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "status_meta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default StatusMeta;
