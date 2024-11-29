const Task = require("../models/Task");

const resolvers = {
  Query: {
    // Obtener todas las tareas, con filtros opcionales
    async tasks(_, { status, search }) {
      const filter = {};

      if (status) {
        filter.status = status;
      }

      if (search) {
        filter.title = { $regex: search, $options: "i" };
      }

      return await Task.find(filter);
    },

    // Obtener una tarea específica por ID
    async task(_, { _id }) {
      return await Task.findById(_id);
    },
  },
};

module.exports = resolvers;
