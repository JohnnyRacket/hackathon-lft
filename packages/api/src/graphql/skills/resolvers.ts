import { Skill } from "@prisma/client";
import { context, Context } from "../../context";

export const skillResolvers = {
  Query: {
    skills: async (): Promise<Skill[]> => await context.prisma.skill.findMany(),
  },
  Mutation: {
    addSkill: async (_parent, { name }, context: Context): Promise<Skill> => {
      const res = await context.prisma.skill.create({
        data: {
          name,
        },
      });
      return res;
    },
    deleteSkill: async (_parent, { name }, context: Context): Promise<Boolean> => {
      const res = await context.prisma.skill.delete({
        where: { name },
      });
      return res;
    },
  },
};
