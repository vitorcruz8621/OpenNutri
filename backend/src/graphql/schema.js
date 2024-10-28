import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import Nutricionista from "../models/nutricionistaSchema.js";
import Paciente from "../models/pacienteSchema.js";
import Consulta from "../models/consultaSchema.js";
import Meta from "../models/metaSchema.js";

// Define Nutricionista type
const NutricionistaType = new GraphQLObjectType({
  name: "Nutricionista",
  fields: {
    id: { type: GraphQLInt },
    nome: { type: GraphQLString },
    email: { type: GraphQLString },
    telefone: { type: GraphQLString },
  },
});

// Define Paciente type
const PacienteType = new GraphQLObjectType({
  name: "Paciente",
  fields: {
    id: { type: GraphQLInt },
    nome: { type: GraphQLString },
    email: { type: GraphQLString },
    dataNascimento: { type: GraphQLString },
    telefone: { type: GraphQLString },
  },
});

// Define Consulta type
const ConsultaType = new GraphQLObjectType({
  name: "Consulta",
  fields: {
    id: { type: GraphQLInt },
    nutricionistaId: { type: GraphQLInt },
    pacienteId: { type: GraphQLInt },
    dataConsulta: { type: GraphQLString },
    observacoes: { type: GraphQLString },
  },
});

// Define Meta type
const MetaType = new GraphQLObjectType({
  name: "Meta",
  fields: {
    id: { type: GraphQLInt },
    pacienteId: { type: GraphQLInt },
    descricao: { type: GraphQLString },
    dataMeta: { type: GraphQLString },
  },
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    nutricionistas: {
      type: new GraphQLList(NutricionistaType),
      resolve(parent, args) {
        return Nutricionista.findAll();
      },
    },
    nutricionista: {
      type: NutricionistaType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return Nutricionista.findByPk(args.id);
      },
    },
    pacientes: {
      type: new GraphQLList(PacienteType),
      resolve(parent, args) {
        return Paciente.findAll();
      },
    },
    paciente: {
      type: PacienteType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return Paciente.findByPk(args.id);
      },
    },
    consultas: {
      type: new GraphQLList(ConsultaType),
      resolve(parent, args) {
        return Consulta.findAll();
      },
    },
    consulta: {
      type: ConsultaType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return Consulta.findByPk(args.id);
      },
    },
    metas: {
      type: new GraphQLList(MetaType),
      resolve(parent, args) {
        return Meta.findAll();
      },
    },
    meta: {
      type: MetaType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return Meta.findByPk(args.id);
      },
    },
  },
});

// Define Mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Nutricionista Mutations
    createNutricionista: {
      type: NutricionistaType,
      args: {
        nome: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        senha: { type: new GraphQLNonNull(GraphQLString) },
        telefone: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const nutricionistaData = {
          nome: args.nome,
          email: args.email,
          senha: args.senha,
          telefone: args.telefone,
        };
        return await Nutricionista.create(nutricionistaData);
      },
    },
    updateNutricionista: {
      type: NutricionistaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        nome: { type: GraphQLString },
        email: { type: GraphQLString },
        senha: { type: GraphQLString },
        telefone: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const nutricionista = await Nutricionista.findByPk(args.id);
        if (nutricionista) {
          const updatedData = {
            nome: args.nome || nutricionista.nome,
            email: args.email || nutricionista.email,
            senha: args.senha || nutricionista.senha,
            telefone: args.telefone || nutricionista.telefone,
          };
          await nutricionista.update(updatedData);
          return nutricionista;
        }
        throw new Error("Nutricionista não encontrado");
      },
    },
    deleteNutricionista: {
      type: NutricionistaType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      async resolve(parent, args) {
        const nutricionista = await Nutricionista.findByPk(args.id);
        if (nutricionista) {
          await nutricionista.destroy();
          return nutricionista;
        }
        throw new Error("Nutricionista não encontrado");
      },
    },
    // Paciente Mutations
    createPaciente: {
      type: PacienteType,
      args: {
        nome: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        dataNascimento: { type: new GraphQLNonNull(GraphQLString) },
        telefone: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const pacienteData = {
          nome: args.nome,
          email: args.email,
          dataNascimento: args.dataNascimento,
          telefone: args.telefone,
        };
        return await Paciente.create(pacienteData);
      },
    },
    updatePaciente: {
      type: PacienteType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        nome: { type: GraphQLString },
        email: { type: GraphQLString },
        dataNascimento: { type: GraphQLString },
        telefone: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const paciente = await Paciente.findByPk(args.id);
        if (paciente) {
          const updatedData = {
            nome: args.nome || paciente.nome,
            email: args.email || paciente.email,
            dataNascimento: args.dataNascimento || paciente.dataNascimento,
            telefone: args.telefone || paciente.telefone,
          };
          await paciente.update(updatedData);
          return paciente;
        }
        throw new Error("Paciente não encontrado");
      },
    },
    deletePaciente: {
      type: PacienteType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      async resolve(parent, args) {
        const paciente = await Paciente.findByPk(args.id);
        if (paciente) {
          await paciente.destroy();
          return paciente;
        }
        throw new Error("Paciente não encontrado");
      },
    },
    // Consulta Mutations
    createConsulta: {
      type: ConsultaType,
      args: {
        nutricionistaId: { type: new GraphQLNonNull(GraphQLInt) },
        pacienteId: { type: new GraphQLNonNull(GraphQLInt) },
        dataConsulta: { type: new GraphQLNonNull(GraphQLString) },
        observacoes: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const consultaData = {
          nutricionistaId: args.nutricionistaId,
          pacienteId: args.pacienteId,
          dataConsulta: args.dataConsulta,
          observacoes: args.observacoes,
        };
        return await Consulta.create(consultaData);
      },
    },
    updateConsulta: {
      type: ConsultaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        nutricionistaId: { type: GraphQLInt },
        pacienteId: { type: GraphQLInt },
        dataConsulta: { type: GraphQLString },
        observacoes: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const consulta = await Consulta.findByPk(args.id);
        if (consulta) {
          const updatedData = {
            nutricionistaId: args.nutricionistaId || consulta.nutricionistaId,
            pacienteId: args.pacienteId || consulta.pacienteId,
            dataConsulta: args.dataConsulta || consulta.dataConsulta,
            observacoes: args.observacoes || consulta.observacoes,
          };
          await consulta.update(updatedData);
          return consulta;
        }
        throw new Error("Consulta não encontrada");
      },
    },
    deleteConsulta: {
      type: ConsultaType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      async resolve(parent, args) {
        const consulta = await Consulta.findByPk(args.id);
        if (consulta) {
          await consulta.destroy();
          return consulta;
        }
        throw new Error("Consulta não encontrada");
      },
    },
    // Meta Mutations
    createMeta: {
      type: MetaType,
      args: {
        pacienteId: { type: new GraphQLNonNull(GraphQLInt) },
        descricao: { type: new GraphQLNonNull(GraphQLString) },
        dataMeta: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const metaData = {
          pacienteId: args.pacienteId,
          descricao: args.descricao,
          dataMeta: args.dataMeta,
        };
        return await Meta.create(metaData);
      },
    },
    updateMeta: {
      type: MetaType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        pacienteId: { type: GraphQLInt },
        descricao: { type: GraphQLString },
        dataMeta: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const meta = await Meta.findByPk(args.id);
        if (meta) {
          const updatedData = {
            pacienteId: args.pacienteId || meta.pacienteId,
            descricao: args.descricao || meta.descricao,
            dataMeta: args.dataMeta || meta.dataMeta,
          };
          await meta.update(updatedData);
          return meta;
        }
        throw new Error("Meta não encontrada");
      },
    },
    deleteMeta: {
      type: MetaType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      async resolve(parent, args) {
        const meta = await Meta.findByPk(args.id);
        if (meta) {
          await meta.destroy();
          return meta;
        }
        throw new Error("Meta não encontrada");
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
