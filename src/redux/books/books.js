import { apiAddBooks, apiRemoveBook } from '../dataAPI';

// const GET_BOOKS = 'my-app/books/GET_BOOKS';
const ADD_BOOK = 'my-app/books/ADD_BOOK';
const REMOVE_BOOK = 'my-app/books/REMOVE_BOOK';

const initialState = [];

// const getBooks = () => async (dispatch) => {
//   const response = await apiGetBooks();
//   dispatch({
//     type: GET_BOOKS,
//     payload: response,
//   });
// };

const addBook = (title, author) => async (dispatch) => {
  const response = await apiAddBooks(title, author);
  if (response.status === 201) {
    dispatch({
      type: ADD_BOOK,
      payload: {
        title,
        author,
      },
    });
  }
};

const removeBook = (id) => async (dispatch) => {
  const response = await apiRemoveBook(id);
  if (response.status === 201) {
    dispatch({
      type: REMOVE_BOOK,
      payload: { id },
    });
  }
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_BOOKS:
    //   return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.title.replace(/\s+/g, ''),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.payload.id));
    default: return state;
  }
};

export default booksReducer;
export { addBook, removeBook };
