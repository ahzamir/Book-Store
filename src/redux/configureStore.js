import { combineReducers } from 'redux';
import books from './books/books';
import categories from './categories/categories';
import { configureStore } from '@reduxjs/toolkit/dist/configureStore';

const rootReducer = combineReducers({
  books,
  categories
});

export default rootReducer;