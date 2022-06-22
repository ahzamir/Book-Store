const CHECK_STATUS = 'my-app/categories/CHECK';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        'Under Constructuion'];
    default: return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
export default categoriesReducer;
