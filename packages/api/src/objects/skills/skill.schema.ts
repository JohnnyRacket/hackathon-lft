import { gql } from 'apollo-server-express';

export const skillTypeDefs = gql`
  type Skill {
    name: String
  }

  type Query {
    skills: [Skill]
  }

  type Mutation {
    addSkill(name: String): Skill
    removeSkill(name: String): Skill
  }
`;
