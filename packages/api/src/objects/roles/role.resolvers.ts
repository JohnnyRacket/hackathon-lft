import Role from "./role.model";

export const roleResolvers = {
  Query: {
    roles: async (): Promise<Role[]> => await Role.query(),
  },
  Mutation: {
    createRole: async (_parent, { name }: { name: string }, _context): Promise<Role> => {
      const res = await Role.query().insert({
        name,
      });
      return res;
    },
    deleteRole: async (_parent, { name }: { name: string }, _context): Promise<number> => {
      return await Role.query().delete().where("name", name);
    },
  },
};
