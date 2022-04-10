import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: String
    name: String
    email: String
    role: JobRole
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    name: String
    email: String
    role: JobRole
  }

  enum JobRole {
    IOS
    ANDROID
    WEB
    DESIGNER
    OTHER
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(userInput: UserInput): User
    editUser(id: String, userInput: UserInput): User
    removeUser(id: String): Boolean
  }
`;