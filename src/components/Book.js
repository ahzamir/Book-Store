import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id, category }) => {
  const dispatch = useDispatch();
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };
  return (
    <li className="bookCard">
      <div>
        <p className='bookCategory'>
          {category}
        </p>
        <h2 className="bookTitle">
          Book title:
          {title}
        </h2>
        <p className="bookAuthor">
          Book author:
          {author}
        </p>
      </div>
      <div>
        <button
          type='button'
        >
          Comments
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove
        </button>
        <button
          type="button"
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default Book;
