import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCvs } from '../store/cvsSlice';

function SearchElement({className}) {

  const dispatch = useDispatch();
  const onClickSearchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchCvs());
  };

  return (
    <form className={"search-form" + ' ' + className}>
      <div className="search-input">
        <svg className="search-input__icon" width="14px" height="14px">
          <use href="images/icons.svg#icon-zoom"></use>
        </svg>
        <input
          className="search-input__field search-input__field--big"
          type="text"
          placeholder="На какую должность вы ищете кандидата?"
        />
      </div>
      <div className="search-input">
        <svg className="search-input__icon" width="14px" height="14px">
          <use href="images/icons.svg#icon-point"></use>
        </svg>
        <input
          className="search-input__field search-input__field--small"
          type="text"
          placeholder="Город"
        />
      </div>
      <button onClick={onClickSearchHandler} className="search-button ">
        Найти кандидатов
      </button>
    </form>
  );
}

export default SearchElement;
