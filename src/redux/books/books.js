import { apiAddBooks, apiRemoveBook, apiGetBooks } from '../dataAPI';

const GET_BOOKS = 'my-app/books/GET_BOOKS';
const ADD_BOOK = 'my-app/books/ADD_BOOK';
const REMOVE_BOOK = 'my-app/books/REMOVE_BOOK';

const initialState = [];

const getBooks = () => async (dispatch) => {
  const response = await apiGetBooks();
  const splitKeyValue = (obj) => {
    const keys = Object.keys(obj);
    const res = [];
    for (let i = 0; i < keys.length; i += 1) {
      res.push({
        id: keys[i],
        title: obj[keys[i]][0].title,
        author: obj[keys[i]][0].author,
        category: obj[keys[i]][0].category,
      });
    }
    return res;
  };
  const books = splitKeyValue(response);
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

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
    case GET_BOOKS:
      return action.payload;
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
export { addBook, removeBook, getBooks };
