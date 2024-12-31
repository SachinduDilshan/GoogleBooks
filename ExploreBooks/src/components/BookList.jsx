import React from "react";
import "./styles/books.css";

const BookList = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img
            src={
              book.volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/150"
            }
            alt={book.volumeInfo.title}
            className="book-thumbnail"
          />
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          <p className="book-author">
            {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
          </p>
          <a
            href={book.volumeInfo.infoLink}
            className="btn-more-details"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Details
          </a>
        </div>
      ))}
    </div>
  );
};

export default BookList;
