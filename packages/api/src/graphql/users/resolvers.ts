import { User } from "@prisma/client";
import { context, Context } from '../../context';


export const userResolvers = {
    Query: {
        users: async (): Promise<User[]> => await context.prisma.user.findMany(),
        user: async (_parent, { id }, context: Context): Promise<User> => await context.prisma.user.findFirst({
            where: { id }
        })
    },
    Mutation: {
        addUser: async (_parent, { name, email, role }, context: Context): Promise<User> => {
            const res = await context.prisma.user.create({
                data: {
                    name,
                    email,
                    role
                }
            })
            return res;
        },
        editUser: async (_parent, { id, name, email, role }, context: Context): Promise<User> => {
            const res = await context.prisma.user.update({
                where: { id },
                data: {
                    name,
                    email,
                    role
                }
            })
            return res;
        },
        removeUser: async (_parent, { id }, context: Context): Promise<User> => {
            const res = await context.prisma.user.delete({
                where: { id }
            })
            return res;
        }
    }
};