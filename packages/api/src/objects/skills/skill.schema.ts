import { gql } from "apollo-server-express";

export const skillTypeDefs = gql`
  type Skill {
    name: String
  }

  type Query {
    skills: [Skill]
  }

  type Mutation {
    createSkill(name: String): Skill
    deleteSkill(name: String): Skill
  }
`;
