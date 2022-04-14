import { gql } from "apollo-server-express";

export const skillTypeDefs = gql`
  type Skill {
    name: String
  }
`;
