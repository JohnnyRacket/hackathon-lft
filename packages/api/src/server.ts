import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { mergeResolvers } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';
import { GraphQLResolverMap } from '@apollographql/apollo-tools';
import { booksTypeDefs } from './graphql/books/typeDefs';
import { bookResolvers } from './graphql/books/resolvers';
import { context } from './context';
import { userTypeDefs } from './graphql/users/typeDefs';
import { userResolvers } from './graphql/users/resolvers';

async function startApolloServer(typeDefs: DocumentNode | Array<DocumentNode>, resolvers: GraphQLResolverMap<any>) {
  const app = express();

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: context
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer([booksTypeDefs, userTypeDefs], mergeResolvers([bookResolvers, userResolvers]) as GraphQLResolverMap<any>);
