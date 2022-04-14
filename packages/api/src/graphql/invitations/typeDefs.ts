import { gql } from "apollo-server-express";

export const invitationTypeDefs = gql`

  type Invitation {
    id: String
    sendingUser: User
    senderId: String
    receivingUser: User
    receiverId: String
    status: String
    message: String
    team: String
  }

  input InvitationInput {
    senderId: String
    receiverId: String
    status: String
    message: String
    team: String
  }

  type Query {
    invitations: [Invitation]
  }

  type Mutation {
    removeInvitation(id: String): Invitation
  }
`;
