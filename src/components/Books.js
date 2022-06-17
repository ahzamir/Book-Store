import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books }) => {
  Books.propTypes = {
    books: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default Books;
