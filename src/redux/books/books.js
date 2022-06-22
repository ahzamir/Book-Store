const ADD_BOOK = 'my-app/books/ADD';
const REMOVE_BOOK = 'my-app/books/REMOVE';

const initialState = [
  { title: 'ahmad book', author: 'ahmad', id: 0 },
  { title: 'mahmood book', author: 'mahmood', id: 1 },
  { title: 'karim book', author: 'karim', id: 2 },
  { title: 'janat book', author: 'janat', id: 3 },
];

let nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: nextBookId(state),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.payload.id));
    default: return state;
  }
};

const addBook = (title, author) => {
  nextBookId += 1;
  return {
    type: ADD_BOOK,
    payload: {
      title,
      author,
    },
  };
};

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export default booksReducer;
export { addBook, removeBook };
