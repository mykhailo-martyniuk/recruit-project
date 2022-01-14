import React from 'react';

function Navigation() {
  const resolution = window.matchMedia('(max-width: 700px)');

  return (
    <>
      {resolution.matches ? (
        <nav className='nav-mobile'>
          <a className="nav-mobile__link" href="">
            Соискатель
          </a>
          <svg className="nav-mobile__icon-arrow" width="11px" height="6px">
            <use href="images/icons.svg#icon-arrow_small"></use>
          </svg>
        </nav>
      ) : (
        <nav className="nav">
          <ul className="list-with-line">
            <li className="list-with-line__item">
              <a className="list-with-line__link" href="">
                Соискатель
              </a>
            </li>
            <li className="list-with-line__item list-with-line__item--active">
              <a className="list-with-line__link" href="">
                Работодатель
              </a>
            </li>
            <li className="list-with-line__item">
              <a className="list-with-line__link" href="">
                HR
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navigation;
