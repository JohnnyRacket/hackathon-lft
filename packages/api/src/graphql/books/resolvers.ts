import { Book } from "@prisma/client";
import { context, Context } from '../../context';


export const bookResolvers = {
    Query: {
      books: async (): Promise<Book[]> => await context.prisma.book.findMany(),
      book: async (_parent, {id}, context: Context): Promise<Book> => await context.prisma.book.findFirst({
            where: {id}
        })
    },
    Mutation: {
        addBook: async (_parent, {title, author}, context: Context): Promise<Book> => {
            const res = await context.prisma.book.create({
                data: {
                    title,
                    author,
                    createdAt: new Date().toISOString()
                }
            })
            return res;
        }
    }
  };