import { DataTypes } from "sequelize";
import sequelize from "../configs/db_config.js";
import Nutricionista from "./nutricionistaSchema.js";
import Paciente from "./pacienteSchema.js";
import StatusConsulta from "./statusConsultaSchema.js";

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
      type: DataTypes.TEXT,
      allowNull: false,
      field: "data_consulta",
      validate: {
        is: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/gm,
      }
    },
    horarioInicio: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "horario_inicio",
      validate: {
        is: /^(?:[01]\d|2[0-3]):[0-5]\d$/gm
      }
    },
    horarioTermino: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "horario_termino",
      validate: {
        is: /^(?:[01]\d|2[0-3]):[0-5]\d$/gm
      }
    },
    observacoes: {
      type: DataTypes.TEXT,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "status_id",
      references: {
        model: "StatusConsulta",
        key: "id",
      },
    },
  },
  {
    tableName: "consulta",
    schema: "public",
    timestamps: false,
    underscored: true,
  }
);

Consulta.belongsTo(Nutricionista, {
  foreignKey: "nutricionistaId",
  as: "nutricionista",
});
Consulta.belongsTo(Paciente, { foreignKey: "pacienteId", as: "paciente" });
Consulta.belongsTo(StatusConsulta, { foreignKey: "statusId", as: "status" });

export default Consulta;