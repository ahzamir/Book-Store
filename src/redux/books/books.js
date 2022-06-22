const ADD_BOOK = 'my-app/books/ADD';
const REMOVE_BOOK = 'my-app/books/REMOVE';

const books = (state = [{ title: 'ahmad book', author: 'ahmad', id: 0 },
{ title: 'mahmood book', author: 'mahmood', id: 1 },
{ title: 'karim book', author: 'karim', id: 2 },
{ title: 'janat book', author: 'janat', id: 3 }], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: action.payload.id,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.payload.id));
    default: return state;
  }
};

let nextBookId = 0;
const addBook = (title, author) => {
  nextBookId += 1;
  return {
    type: ADD_BOOK,
    payload: {
      id: nextBookId,
      title,
      author,
    }
  };
};

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default books;
export { addBook, removeBook };
