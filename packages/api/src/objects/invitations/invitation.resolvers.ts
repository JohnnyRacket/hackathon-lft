import Invitation from "./Invitation.model";

export const invitationResolvers = {
  Query: {
    invitations: async (): Promise<Invitation[]> => await Invitation.query()
  },

  Mutation: {
    removeInvitation: async (_parent, { id }, _context): Promise<number> =>  await Invitation.query().delete().where('id', id)
  },
};
