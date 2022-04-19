
import {randomUUID} from 'crypto';
import Role from '../roles/role.model';
import Skill from '../skills/skill.model';
import User from './user.model';
import { InvitationInput } from '../invitations/invitation.types';
import { UserInput } from './user.types';

export const userResolvers = {
  Query: {
    users: async (): Promise<User[]> => await User.query(),//.withGraphFetched(['role', 'skills'])
    user: async (_parent, { id }: { id: string }, _context): Promise<User> => await User.query().findById(id)
  },
  User: {
    role: async ({ id }: User, _input, _context): Promise<Role> => await User.relatedQuery('role').for(id).first(),
    skills: async ({ id }: User, _input, _context): Promise<Skill[]> => await User.relatedQuery('skills').for(id)
  },
  Mutation: {
    addUser: async (_parent, {
      userInput: {
        firstName, lastName, email, role, team, skills,
      },
    }: { userInput: UserInput }, _context): Promise<User> => {
      const res = await User.query().insertGraph({
        id: randomUUID(),
        firstName,
        lastName,
        email,
        team,
        role: {
          name: role
        },
        skills: skills.map((skill) => ({ name: skill })),
      }, {
        relate: ['role', 'skills']
      });
  return res;
},
  // editUser: async (
  //   _parent,
  //   {
  //     id, userInput: {
  //       firstName, lastName, email, role, team, skills,
  //     },
  //   }: { id: string, userInput: UserInput },
  //   _context,
  // ): Promise<User> => {
  //   const res = await context.prisma.user.update({
  //     where: { id },
  //     data: {
  //       name,
  //       email,
  //       role: {
  //         connect: { name: role },
  //       },
  //       team,
  //       skills: {
  //         create: skills.map((skill) => ({ skill: { connect: { name: skill } } })),
  //       },
  //     },
  //   });
  //   return res;
  // },
  //   removeUser: async (_parent, { id }: { id: string }, _context): Promise<User> => {
  //     const res = await context.prisma.user.delete({
  //       where: { id },
  //     });
  //     return res;
  //   },
  //     inviteUser: async (_parent, {
  //       invitationInput: {
  //         senderId, receiverId, status, message, team,
  //       },
  //     }: { invitationInput: InvitationInput }, _context): Promise<Invitation> => {
  //       const res = await context.prisma.invitation.create({
  //         data: {
  //           senderId,
  //           receiverId,
  //           status,
  //           message,
  //           team,
  //         },
  //       });
  //       return res;
  //     },
  },
};
