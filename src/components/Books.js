import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Book from './Book';

const Books = ({ books }) => {
  Books.propTypes = {
    books: PropTypes.arrayOf(shape({})).isRequired,
  };
  return (
    <ul className="padding booksCards">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.id}
        />
      ))}
    </ul>
  );
};

export default Books;
