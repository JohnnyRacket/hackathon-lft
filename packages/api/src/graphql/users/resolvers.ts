import { User, Invitation } from "@prisma/client";
import { context, Context } from "../../context";

export const userResolvers = {
  Query: {
    users: async (): Promise<User[]> => await context.prisma.user.findMany(),
    user: async (_parent, { id }, context: Context): Promise<User> =>
      await context.prisma.user.findFirst({
        where: { id },
      }),
  },
  Mutation: {
    addUser: async (_parent, { userInput: { name, email, role, team, skills } }, context: Context): Promise<User> => {
      const res = await context.prisma.user.create({
        data: {
          name,
          email,
          role,
          team,
          skills,
        },
      });
      return res;
    },
    editUser: async (
      _parent,
      { id, userInput: { name, email, role, team, skills } },
      context: Context
    ): Promise<User> => {
      const res = await context.prisma.user.update({
        where: { id },
        data: {
          name,
          email,
          role,
          team,
          skills,
        },
      });
      return res;
    },
    removeUser: async (_parent, { id }, context: Context): Promise<User> => {
      const res = await context.prisma.user.delete({
        where: { id },
      });
      return res;
    },
    inviteUser: async (_parent, { senderId, receiverId }, context: Context): Promise<Invitation> => {
      const res = await context.prisma.invitation.create({
        data: { senderId, receiverId },
      });
      return res;
    },
  },
};
