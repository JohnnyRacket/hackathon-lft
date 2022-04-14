import { gql } from "apollo-server-express";

export const invitationTypeDefs = gql`

  type Invitation {
    id: String
    sendingUser: User
    senderId: String
    receivingUser: User
    recieverId: String
    status: String
  }

  input InvitationInput {
    senderId: String
    recieverId: String
    status: String
  }

  type Query {
    invitations: [Invitation]
  }

  type Mutation {
    removeInvitation(id: String): Invitation
  }
`;
