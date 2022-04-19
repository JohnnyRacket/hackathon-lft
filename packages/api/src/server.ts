import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from '../knexfile';
import { mergeResolvers } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';
import { GraphQLResolverMap } from '@apollographql/apollo-tools';
import { userTypeDefs } from './graphql/users/typeDefs';
import { userResolvers } from './graphql/users/resolvers';
import { skillResolvers } from './graphql/skills/resolvers';
import { roleTypeDefs } from './graphql/roles/typeDefs';
import { skillTypeDefs } from './graphql/skills/typeDefs';
import { roleResolvers } from './graphql/roles/resolvers';
import { invitationResolvers } from './graphql/invitations/resolvers';
import { invitationTypeDefs } from './graphql/invitations/typeDefs';

async function startApolloServer(typeDefs: DocumentNode | Array<DocumentNode>, resolvers: GraphQLResolverMap<any>) {
  const app = express();
  const knex = Knex(knexConfig.development)

  Model.knex(knex)

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
  [roleTypeDefs, skillTypeDefs, userTypeDefs],
  mergeResolvers([roleResolvers, skillResolvers, userResolvers]) as GraphQLResolverMap<any>,
);
