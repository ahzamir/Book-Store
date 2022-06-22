import React from 'react';
import { useSelector } from 'react-redux';
import BooksForm from '../BooksForm';
import Books from '../Books';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
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
