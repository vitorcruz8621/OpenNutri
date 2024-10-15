import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const TipoMeta = sequelize.define(
  "TipoMeta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: "tipo_meta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default TipoMeta;
