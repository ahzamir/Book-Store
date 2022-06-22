import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ title, author, id }) => {

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
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default Book;
