import { Book } from "@prisma/client";
import { booksModel } from "./models";
import { context, Context } from '../../context';


export const bookResolvers = {
    Query: {
      books: async () => await context.prisma.book.findMany(),
      book: async (_parent, {id}, context: Context) => await context.prisma.book.findFirst({
            where: {id}
        })
    },
    Mutation: {
        addBook: async (_parent, {title, author}, context: Context) => {
            const res = await context.prisma.book.create({
                data: {
                    title,
                    author,
                    createdAt: new Date().toISOString()
                }
            })
        }
    }
  };