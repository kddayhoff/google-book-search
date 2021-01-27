const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

//collection is book - each book saves is a document in the collection
module.exports = Book;