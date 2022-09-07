const catchErrorAsync = require("../utility/catchErrorAsync");
const sequelize = require("../config/db");
const Book = require("../models/book");
const getAllBook = catchErrorAsync(async (req, res, next) => {
  const books = await Book.findAll();
  res.status(200).json({
    status: "Succes",
    data: books,
  });
});

const addBook = catchErrorAsync(async (req, res, next) => {
  const { name, price, author } = req.body;
  if (!(name || price || author)) {
    res.status(404).json({
      status: "Fail",
      message: "Siz bookni ma'lumotlarini kiritmadingiz",
    });
  }
  const book = await Book.create({ name, price, author });
  res.status(201).json({
    status: "Succes",
    data: book,
  });
});
const updateBook = catchErrorAsync(async (req, res, next) => {
  const { name, price, author } = req.body;

  const book = await Book.update(
    { name, price, author },
    { where: { id: req.params.id }, returning: true, plain: false }
  );
  res.status(201).json({
    status: "Succes",
    data: book,
  });
});
const getBook = catchErrorAsync(async (req, res, next) => {
  const book = await Book.findOne({ where: { id: req.params.id } });
  res.status(201).json({
    status: "Succes",
    data: book,
  });
});
const deleteBook = catchErrorAsync(async (req, res, next) => {
  await Book.destroy({ where: { id: req.params.id } });

  res.status(200).json({
    status: "Succes",
    message: "Book has been delete",
  });
});

module.exports = { getAllBook, addBook, deleteBook, updateBook, getBook };
