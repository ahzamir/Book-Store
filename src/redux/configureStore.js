import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = configureStore(rootReducer);

export default store;
