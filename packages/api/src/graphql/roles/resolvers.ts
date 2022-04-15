import { Role } from '@prisma/client';
import { context, Context } from '../../context';

export const roleResolvers = {
  Query: {
    roles: async (): Promise<Role[]> => await context.prisma.role.findMany(),
  },
  Mutation: {
    addRole: async (_parent, { name } : {name: string}, context: Context): Promise<Role> => {
      const res = await context.prisma.role.create({
        data: {
          name,
        },
      });
      return res;
    },
    removeRole: async (_parent, { name } : {name: string}, context: Context): Promise<Role> => {
      const res = await context.prisma.role.delete({
        where: { name },
      });
      return res;
    },
  },
};
