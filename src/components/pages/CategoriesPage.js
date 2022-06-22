import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button
        type="button"
        onClick={buttonClickHandler}
      >
        Check status
      </button>
      <p>
        {status[0]}
      </p>
    </div>
  );
};

export default Categories;
