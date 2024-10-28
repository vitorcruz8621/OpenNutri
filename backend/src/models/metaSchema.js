import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";
import Paciente from "./pacienteSchema.js";
import TipoMeta from "./tipoMetaSchema.js";
import StatusMeta from "./statusMetaSchema.js";

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
      type: DataTypes.TEXT,
      allowNull: false,
      field: "data_inicio",
    },
    dataFim: {
      type: DataTypes.TEXT,
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
  },
  {
    tableName: "meta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

// Definir associações
Meta.belongsTo(Paciente, { as: "paciente", foreignKey: "pacienteId" });
Meta.belongsTo(TipoMeta, { as: "tipoMeta", foreignKey: "tipoMetaId" });
Meta.belongsTo(StatusMeta, { as: "statusMeta", foreignKey: "statusMetaId" });

export default Meta;
