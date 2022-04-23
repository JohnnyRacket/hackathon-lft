import { randomUUID } from "crypto";
import Invitation from "./Invitation.model";
import { InvitationInput } from "./invitation.types";

export const invitationResolvers = {
  Query: {
    invitations: async (): Promise<Invitation[]> => await Invitation.query(),
  },

  Mutation: {
    createInvitation: async (
      _parent,
      { invitationInput: { senderId, receiverId, status, message, team } }: { invitationInput: InvitationInput },
      _context
    ): Promise<Invitation> => {
      const res = await Invitation.query().insertGraph({
        id: randomUUID(),
        senderId,
        receiverId,
        status,
        message,
        team,
      });
      return res;
    },
    deleteInvitation: async (_parent, { id }, _context): Promise<number> =>
      await Invitation.query().delete().where("id", id),
  },
};
