import React from 'react';
import BooksForm from '../BooksForm';
import Books from '../Books';

const BooksPage = () => (
  <div className="container">
    <div className="inner">
      <Books />
    </div>
    <div>
      <BooksForm />
    </div>
  </div>
);

export default BooksPage;
