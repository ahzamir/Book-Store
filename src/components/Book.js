import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => {
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
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
      </div>
    </li>
  );
};

export default Book;
