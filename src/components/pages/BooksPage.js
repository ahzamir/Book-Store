import React from 'react';
import BooksForm from '../BooksForm';
import Books from '../Books';

const BooksPage = () => {
  const books = [{
    title: 'ahmad',
    author: 'zaki',
    id: 1,
  },
  {
    title: 'zia',
    author: 'zaki',
    id: 2,
  },
  {
    title: 'sharif',
    author: 'zia',
    id: 3,
  }];
  return (
    <div className="container">
      <div className="inner">
        <Books books={books}/>
      </div>
      <div>
        <BooksForm />
      </div>
    </div>
  )
};

export default BooksPage;
