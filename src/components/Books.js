import React from 'react';
import Book from './Book';

const Books = ({ books }) => (
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
export default Books;
