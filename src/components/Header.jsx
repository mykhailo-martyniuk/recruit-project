import React from 'react';
import LangControl from './LangControl';
import Navigation from './Navigation';
import SearchElement from './SearchElement';

function Header() {
  return (
    <header className="header">
      <div className=" header__container">
        <div className="header__top">
          <Navigation />
          <div className="control">
            <LangControl />
            <button className="control__login">Войти</button>
          </div>
        </div>
        <div className='header__user'>
          <svg className="header__user-icon" width="24px" height="24px">
            <use href="images/icons.svg#icon-user"></use>
          </svg>
          <p className='header__user-name'>Юра Марченко</p>
        </div>
        <SearchElement className='header__search-form'/>
      </div>
    </header>
  );
}

export default Header;
