const CHECK_STATUS = 'my-app/categories/CHECK';

const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Constructuion';
    default: return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
export default categories;
