import http from "http";

import { ApolloServer, PubSub } from "apollo-server-express";

import express from "express";

import { typeDefs } from "./schema/type-defs";

import resolvers, { subscribers } from "./schema/resolver";

const pubsub = new PubSub();
const PORT = 4000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub },
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
    },
    onDisconnect: (webSocket, context) => {
    },
  },
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
