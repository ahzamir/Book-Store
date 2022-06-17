import React from 'react';
import Book from './Book';

const Books = (books) => {
  return (
    <ul>
      {books.books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};
export default Books;
