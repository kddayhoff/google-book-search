import React, { useState, useEffect } from "react";
import SavedBookCard from "../components/SavedBookCard";
import { Container, Typography } from "@material-ui/core";
import API from "../utils/API";

export default function SavedBooks() {

    //only have hook to get saved books and not delete thembc saved books is the array printing the cards to the page with .map, delete is just removingbook from database while  saved book reprints cards
  const [savedBook, setSavedBooks] = useState([]);

  useEffect(() => {
    getSavedBooks();
  }, []);

  

  const getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        console.log(res.data);
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteBookFromPage = (id) => {
    console.log(id);
    API.deleteBook(id)
      .then((res) => {
        console.log(res);
        getSavedBooks();
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
          saveBtn={() => {
            deleteBookFromPage(books._id);
          }}
          btnText="Delete Book"
        />
      ))}
    </Container>
  );
}
