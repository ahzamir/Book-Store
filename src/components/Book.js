import React from 'react';

const Book = (book) => {
  const { author, title } = book;
  return (
    <li>
      <div>
        <span>
          Book title:
          {title}
        </span>
        <span>
          Book author:
          {author}
        </span>
      </div>
    </li>
  );
};

export default Book;
