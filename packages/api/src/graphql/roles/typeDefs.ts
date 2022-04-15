import { gql } from 'apollo-server-express';

export const roleTypeDefs = gql`
  type Role {
    name: String
  }

  type Query {
    roles: [Role]
  }

  type Mutation {
    addRole(name: String): Role
    removeRole(name: String): Role
  }
`;
