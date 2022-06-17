import React from 'react';

const BooksForm = () => (
  <form>
    <input
      type="text"
      placeholder="Book title"
      name="title"
    />
    <input
      type="text"
      placeholder="Book Author"
      name="author"
    />
    <button type="button">
      Add Book
    </button>
  </form>
);

export default BooksForm;
