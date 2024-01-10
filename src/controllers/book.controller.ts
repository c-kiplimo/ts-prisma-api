import * as bookService from "../service/book.service";

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookService.getAllBooks();
    res.status(200).json({ data: allBooks });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookService.getBookById(bookId);
    res.status(200).json({ data: book });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createBook = async (req, res) => {
  try {
    const bookData = req.body;
    const book = await bookService.createBook(bookData);
    res.status(201).json({ data: book });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookData = req.body;
    const book = await bookService.updateBook(bookId, bookData);
    res.status(200).json({ data: book });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    await bookService.deleteBook(bookId);
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
