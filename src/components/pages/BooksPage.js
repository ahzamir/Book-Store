import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooksForm from '../BooksForm';
import Books from '../Books';
import { getBooks } from '../../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="container">
      <div className="inner">
        <Books books={books} />
      </div>
      <div>
        <BooksForm />
      </div>
    </div>
  );
};

export default BooksPage;
