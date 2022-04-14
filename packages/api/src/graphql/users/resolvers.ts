import { User, Invitation, Role, Skill } from "@prisma/client";
import { context, Context } from "../../context";


export const userResolvers = {
    Query: {
        users: async (): Promise<User[]> => await context.prisma.user.findMany(),
        user: async (_parent, { id }, context: Context): Promise<User> =>
            await context.prisma.user.findFirst({
                where: { id },
            }),
    },
    User: {
        role: async ({ id }, _input, context: Context): Promise<Role> => await context.prisma.role.findFirst(
            {
                where: {
                    users: {
                        some: { id }
                    }
                }
            }
        ),
        skills: async ({ id }, _input, context: Context): Promise<Skill[]> => await context.prisma.skill.findMany(
            {
                where: {
                    users: {
                        some: {
                            userId: id
                        }
                    }
                }
            }
        )
    },
    Mutation: {
        addUser: async (_parent, { userInput: { name, email, role, team, skills } }, context: Context): Promise<User> => {
            const res = await context.prisma.user.create({
                data: {
                    name,
                    email,
                    role: {
                        connect: { name: role }
                    },
                    team,
                    skills: {
                        create: skills.map((skill) => ({ skill: {connect: {name: skill} }}))
                    },
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
        inviteUser: async (_parent, { invitationInput: { senderId, receiverId, status } }, context: Context): Promise<Invitation> => {
            const res = await context.prisma.invitation.create({
                data: {
                    senderId,
                    receiverId,
                    status
                },
            });
            return res;
        },
    },
};
