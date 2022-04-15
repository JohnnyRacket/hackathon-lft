import { Invitation } from '@prisma/client';
import { context, Context } from '../../context';

export const invitationResolvers = {
  Query: {
    invitations: async (): Promise<Invitation[]> => await context.prisma.invitation.findMany(),
  },

  Mutation: {
    removeInvitation: async (_parent, { id }, context: Context): Promise<Invitation> => {
      const res = await context.prisma.invitation.delete({
        where: { id },
      });
      return res;
    },
  },
};
