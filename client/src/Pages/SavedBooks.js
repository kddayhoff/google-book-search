import React, { useState, useEffect } from "react";
import SavedBookCard from "../components/SavedBookCard";
import { Container, Typography } from "@material-ui/core";
import API from "../utils/API";

export default function SavedBooks() {
  const [savedBook, setSavedBooks] = useState([]);

  const [deleteBook, setDeleteBook] = useState("");

  useEffect(() => {
    getSavedBooks();
  }, []);

  //event that happens when we click the delete button
  const handleSubmit = (event) => {
    const { value } = event.target;
    setDeleteBook(value);
  };

  const getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        console.log(res.data);
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteBookFromPage = (bookToDelete) => {
    console.log(bookToDelete);
    API.deleteBook(bookToDelete)({
      id: bookToDelete._id,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div>Saved Books Page</div>
      {savedBook.map((books, i) => (
        <SavedBookCard
          key={i}
          id={books._id}
          image={books.image}
          title={books.title}
          authors={books.authors}
          description={books.description}
          link={books.link}
          deleteBtn={() => {
            deleteBookFromPage(books);
          }}
          btnText="Delete Book"
        />
      ))}
    </Container>
  );
}
