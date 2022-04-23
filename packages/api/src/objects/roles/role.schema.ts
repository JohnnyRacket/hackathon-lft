import { gql } from "apollo-server-express";

export const roleTypeDefs = gql`
  type Role {
    name: String
  }

  type Query {
    roles: [Role]
  }

  type Mutation {
    createRole(name: String): Role
    deleteRole(name: String): Role
  }
`;
