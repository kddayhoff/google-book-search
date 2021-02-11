import axios from "axios";

//this is where we have methods for query database
export default {
  searchBooks: function (bookTitle) {
    console.log(bookTitle);
    return axios.get("/api/google/" + bookTitle);
  },

  saveBook: function (bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },

  getSavedBooks: function () {
    return axios.get("/api/books");
  },

  deleteBook: function (id) {
    console.log(id);
    return axios.delete("/api/books/"+ id);
  },
};
