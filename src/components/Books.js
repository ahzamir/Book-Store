import React from 'react';
import Book from './Book';

const Books = () => {
  const books = [{
    title: 'ahmad',
    author: 'zaki',
    id: 1,
  },
  {
    title: 'zia',
    author: 'zaki',
    id: 2,
  },
  {
    title: 'sharif',
    author: 'zia',
    id: 3,
  }]; (
    <ul>
      {books.forEach((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};
export default Books;
