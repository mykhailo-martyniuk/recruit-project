import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { setCurrentPage } from '../store/cvsSlice';

function Pagination() {
  let isDotStart = false;
  let isDotEnd = false;
  let indexDot = 0;

  const currentPage = useSelector((state) => state.cvs.currentPage);
  const pageCount = useSelector((state) => state.cvs.pageCount);

  const dispatch = useDispatch();

  const handlerClickOnNumber = (page) => {
    if (page >= 1 && page <= pageCount) dispatch(setCurrentPage(page));
  };

  const checkPaginationCondition = (i, currentPage, endPage) => {
    if (
      i === 1 ||
      i === endPage ||
      i === endPage - 1 ||
      i === currentPage ||
      i === currentPage - 1 ||
      i === currentPage + 1
    )
      return true;
  };

  return (
    <div className="pagination cv-block__pagination">
      <svg
        className={classNames('pagination__arrow pagination__arrow--left', {
          'pagination__arrow--active': currentPage > 1,
        })}
        width="11px"
        height="6px"
        onClick={() => handlerClickOnNumber(currentPage - 1)}
      >
        <use href="images/icons.svg#icon-arrow_small"></use>
      </svg>
      <ul className="pagination__list">
        {[...Array(pageCount)].map((el, i) => {
          if (checkPaginationCondition(i + 1, currentPage, pageCount))
            return (
              <li
                key={i}
                className={classNames('pagination__number', {
                  'pagination__number--active': i + 1 === currentPage,
                })}
                onClick={() => handlerClickOnNumber(i + 1)}
              >
                {i + 1}
              </li>
            );
          else if (!isDotStart && i < currentPage) {
            isDotStart = true;
            indexDot = i;
            return <li key={i} className="pagination__dots">...</li>;
          } else if (!isDotEnd && indexDot + 2 !== i && i > currentPage) {
            isDotEnd = true;
            return <li key={i}  className="pagination__dots">...</li>;
          }
        })}
      </ul>
      <svg
        width="11px"
        height="6px"
        className={classNames('pagination__arrow pagination__arrow--right', {
          'pagination__arrow--active': currentPage < pageCount,
        })}
        onClick={() => handlerClickOnNumber(currentPage + 1)}
      >
        <use href="images/icons.svg#icon-arrow_small"></use>
      </svg>
    </div>
  );
}

export default Pagination;
