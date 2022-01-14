import React from 'react';

function LangControl() {
  const resolution = window.matchMedia('(max-width: 700px)');

  return (
    <button className="control__lang">
      <svg
        className="control__icon"
        width={resolution.matches ? '13px' : '22px'}
        height={resolution.matches ? '13px' : '22px'}
      >
        <use href="images/icons.svg#icon-lang"></use>
      </svg>
      <span>RU</span>
      <svg className="control__icon" width="14px" height="7px">
        <use href="images/icons.svg#icon-arrow"></use>
      </svg>
    </button>
  );
}

export default LangControl;
