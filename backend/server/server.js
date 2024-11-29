const express = require("express");
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");
const { readFileSync } = require("fs");
const dotenv = require("dotenv");
const taskResolvers = require("../resolvers/taskResolvers");
const connectDB = require("../config/db");
const taskRoutes = require("../routes/taskRoutes");

dotenv.config();

const startServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  await connectDB();

  const typeDefs = gql(
    readFileSync("./schemas/schema.graphql", { encoding: "utf-8" })
  );

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: taskResolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use("/api", taskRoutes);

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(
      `🚀 GraphQL API at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
  });
};

module.exports = startServer;
