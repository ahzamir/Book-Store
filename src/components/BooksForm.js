import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    return title;
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
    return author;
  };
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="bookFormTitle padding">
        ADD NEW BOOK
      </h2>
      <form className="bookForm padding">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          placeholder="Book Author"
          name="author"
          value={author}
          onChange={handleChangeAuthor}
        />
        <button
          type="button"
          onClick={() => { dispatch(addBook(title, author)); }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
