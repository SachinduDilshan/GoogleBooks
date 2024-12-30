import React from "react";
import PropTypes from "prop-types";

const BookList = ({ books }) => {
  return (
    <div className="row">
      {books.map((book, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              className="card-img-top"
              alt={book.volumeInfo.title}
            />
            <div className="card-body">
              <h5 className="card-title">{book.volumeInfo.title}</h5>
              <a
                href={book.volumeInfo.infoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
