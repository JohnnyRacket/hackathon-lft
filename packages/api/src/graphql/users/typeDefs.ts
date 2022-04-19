import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    role: Role
    skills: [Skill]
    team: String
    invitations: [Invitation]
    sentInvitations: [Invitation]
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    role: String
    team: String
    skills: [String]
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(userInput: UserInput): User
    editUser(id: String, userInput: UserInput): User
    removeUser(id: String): Boolean
    inviteUser(invitationInput: InvitationInput): Invitation
  }
`;
