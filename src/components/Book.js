import React from 'react';

const Book = (book) => {
  const { title, author } = book.book;
  return (
    <li>
      <div>
        <h2>
          Book title:
          {title}
        </h2>
        <p>
          Book author:
          {author}
        </p>
      </div>
    </li>
  )
};

export default Book;
