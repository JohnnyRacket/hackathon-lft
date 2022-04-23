import { randomUUID } from "crypto";
import Invitation from "../invitations/Invitation.model";
import Role from "../roles/role.model";
import Skill from "../skills/skill.model";
import User from "./user.model";
import { UserInput } from "./user.types";

export const userResolvers = {
  Query: {
    users: async (): Promise<User[]> => await User.query(), //.withGraphFetched(['role', 'skills'])
    user: async (_parent, { id }: { id: string }, _context): Promise<User> => await User.query().findById(id),
  },
  User: {
    role: async ({ id }: User, _input, _context): Promise<Role> => await User.relatedQuery("role").for(id).first(),
    skills: async ({ id }: User, _input, _context): Promise<Skill[]> => await User.relatedQuery("skills").for(id),
    invitations: async ({ id }: User, _input, _context): Promise<Invitation[]> =>
      await User.relatedQuery("invitations").for(id),
    sentInvitations: async ({ id }: User, _input, _context): Promise<Invitation[]> =>
      await User.relatedQuery("sentInvitations").for(id),
  },
  Mutation: {
    createUser: async (
      _parent,
      { userInput: { firstName, lastName, email, role, team, skills } }: { userInput: UserInput },
      _context
    ): Promise<User> => {
      const res = await User.query().insertGraph(
        {
          id: randomUUID(),
          firstName,
          lastName,
          email,
          team,
          role: role
            ? {
                name: role,
              }
            : undefined,
          skills: skills?.map((skill) => ({ name: skill })),
        },
        {
          relate: ["role", "skills"],
        }
      );

      return res;
    },
    updateUser: async (
      _parent,
      { id, userInput: { firstName, lastName, email, role, team, skills } }: { id: string; userInput: UserInput },
      _context
    ): Promise<User> => {
      const res = await User.query().upsertGraph(
        {
          id,
          firstName,
          lastName,
          email,
          team,
          role: role
            ? {
                name: role,
              }
            : undefined,
          skills: skills?.map((skill) => ({ name: skill })),
        },
        {
          relate: ["role", "skills"],
        }
      );
      return res;
    },
    deleteUser: async (_parent, { id }: { id: string }, _context): Promise<number> => {
      const res = await User.query().deleteById(id);
      return res;
    },
  },
};
