import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;

export const getAllBooks = async () => {
  try {
    return await bookClient.findMany();
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getBookById = async (bookId) => {
  try {
    return await bookClient.findUnique({
      where: { id: bookId },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const createBook = async (bookData) => {
  try {
    return await bookClient.create({
      data: {
        title: bookData.title,
        author: {
          connect: { id: bookData.authorId },
        },
      },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const updateBook = async (bookId, bookData) => {
  try {
    return await bookClient.update({
      where: { id: bookId },
      data: bookData,
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteBook = async (bookId) => {
  try {
    return await bookClient.delete({
      where: { id: bookId },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
