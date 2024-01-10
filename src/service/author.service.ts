import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;

export const getAllAuthors = async () => {
  try {
    return await authorClient.findMany({
      include: {
        books: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getAuthorById = async (authorId) => {
  try {
    return await authorClient.findUnique({
      where: { id: authorId },
      include: {
        books: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const createAuthor = async (authorData) => {
  try {
    return await authorClient.create({
      data: authorData,
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const updateAuthor = async (authorId, authorData) => {
  try {
    return await authorClient.update({
      where: { id: authorId },
      data: authorData,
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const deleteAuthor = async (authorId) => {
  try {
    return await authorClient.delete({
      where: { id: authorId },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
