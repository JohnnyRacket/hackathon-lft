import Skill from "./skill.model";

export const skillResolvers = {
  Query: {
    skills: async (): Promise<Skill[]> => await Skill.query(),
  },
  Mutation: {
    addSkill: async (_parent, { name } : {name: string}, _context): Promise<Skill> => {
      const res = await Skill.query().insert({
          name,
      });
      return res;
    },
    removeSkill: async (_parent, { name } : {name: string}, _context): Promise<number> => {
      return await Skill.query().delete().where('name', name);
    },
  },
};
