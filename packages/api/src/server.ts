import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { Model } from "objection";
import Knex from "knex";
import knexConfig from "../knexfile";
import { mergeResolvers } from "@graphql-tools/merge";
import { DocumentNode } from "graphql";
import { GraphQLResolverMap } from "@apollographql/apollo-tools";
import { userTypeDefs } from "./objects/users/user.schema";
import { userResolvers } from "./objects/users/user.resolvers";
import { skillResolvers } from "./objects/skills/skill.resolvers";
import { roleTypeDefs } from "./objects/roles/role.schema";
import { skillTypeDefs } from "./objects/skills/skill.schema";
import { roleResolvers } from "./objects/roles/role.resolvers";
import { invitationTypeDefs } from "./objects/invitations/invitation.schema";
import { invitationResolvers } from "./objects/invitations/invitation.resolvers";
// import { invitationResolvers } from './graphql/invitations/resolvers';
// import { invitationTypeDefs } from './graphql/invitations/typeDefs';

async function startApolloServer(typeDefs: DocumentNode | Array<DocumentNode>, resolvers: GraphQLResolverMap<any>) {
  const app = express();
  const knex = Knex(knexConfig.development);

  // knex.on("query", (data) => {
  //   console.dir(data);
  // });

  Model.knex(knex);

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(
  [roleTypeDefs, skillTypeDefs, invitationTypeDefs, userTypeDefs],
  mergeResolvers([roleResolvers, skillResolvers, invitationResolvers, userResolvers]) as GraphQLResolverMap<any>
);
