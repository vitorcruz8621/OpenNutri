import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";

const Meta = sequelize.define(
  "Meta",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    tipoMetaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "tipo_meta_id",
      references: {
        model: "TipoMeta",
        key: "id",
      },
    },
    dataInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "data_inicio",
    },
    dataFim: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "data_fim",
    },
    statusMetaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "status_meta_id",
      references: {
        model: "StatusMeta",
        key: "id",
      },
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
    tableName: "meta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

export default Meta;
