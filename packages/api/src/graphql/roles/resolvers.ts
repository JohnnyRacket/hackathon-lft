import Role from '../../models/Role.model';

export const roleResolvers = {
  Query: {
    roles: async (): Promise<Role[]> => await Role.query(),
  },
  Mutation: {
    addRole: async (_parent, { name } : {name: string}, _context): Promise<Role> => {
      const res = await Role.query().insert({
        name,
    });
    return res;
    },
    removeRole: async (_parent, { name } : {name: string}, _context): Promise<number> => {
      return await Role.query().delete().where('name', name);
    },
  },
};
