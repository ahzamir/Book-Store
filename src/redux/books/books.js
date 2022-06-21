const ADD_BOOK = 'my-app/books/ADD';
const REMOVE_BOOK = 'my-app/books/REMOVE';

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return state;
  }
};

let nextBookId = 0;
const addBook = (title, author) => {
  nextBookId += 1;
  return {
    type: ADD_BOOK,
    id: nextBookId,
    title,
    author,
  };
};

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default books;
export { addBook, removeBook };
