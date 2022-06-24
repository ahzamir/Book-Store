import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
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
        <div>
          <p className="bookCategory">
            {category}
          </p>
          <h2 className="bookTitle">
            {title}
          </h2>
          <p className="bookAuthor">
            {author}
          </p>
        </div>
        <div>
          <button
            type="button"
            className="bookButton bookAuthor"
          >
            Comments
          </button>
          <button
            type="button"
            onClick={() => dispatch(removeBook(id))}
            className="bookButton bookAuthor"
          >
            Remove
          </button>
          <button
            type="button"
            className="bookButton bookAuthor"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="bookCompleted">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle"> 75% </div>
            <div className="mask full">
              <div className="fill" />
            </div>
          </div>
        </div>
        <div>
          <p className="bookCompletedPercentage">
            75%
          </p>
          <p className="completed">
            completed
          </p>
        </div>
      </div>
      <div className="chapterInfo">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="updatesButton" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;
