import { booksModel } from "./models";

export const bookResolvers = {
    Query: {
      books: () => booksModel,
    },
  };