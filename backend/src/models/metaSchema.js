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
      validate: {
        is: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/gm,
      }
    },
    dataFim: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "data_fim",
      validate: {
        is: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/gm,
      }
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

Meta.belongsTo(Paciente, { as: "paciente", foreignKey: "pacienteId" });
Meta.belongsTo(TipoMeta, { as: "tipoMeta", foreignKey: "tipoMetaId" });
Meta.belongsTo(StatusMeta, { as: "statusMeta", foreignKey: "statusMetaId" });

export default Meta;
