import React from 'react';
import BooksForm from '../BooksForm';
import Books from '../Books';
import { useSelector } from 'react-redux';

const BooksPage = () => {
  const books = useSelector(state => state)
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
