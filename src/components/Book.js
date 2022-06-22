import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };
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
        <button
          type="button"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Book;
