import * as authorService from "../service/author.service";

export const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await authorService.getAllAuthors();
    res.status(200).json({ data: allAuthors });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await authorService.getAuthorById(authorId);
    res.status(200).json({ data: author });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const authorData = req.body;
    const author = await authorService.createAuthor(authorData);
    res.status(201).json({ data: author });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;
    const author = await authorService.updateAuthor(authorId, authorData);
    res.status(200).json({ data: author });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    await authorService.deleteAuthor(authorId);
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
