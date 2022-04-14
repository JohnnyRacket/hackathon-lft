import { gql } from "apollo-server-express";

export const roleTypeDefs = gql`
  type Role {
    name: String
  }
`;
