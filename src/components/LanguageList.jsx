import { languages } from '../data';
import React from 'react';

function LanguageList() {
  return (
    <div className="language-list">
      <h4 className="language-list__title filters-form__title">
        Владение языками
      </h4>

      <ul className="language-list__list vertical-list">
        {languages.map((el,i) => (
          <li key={i} className="language-list__item vertical-list__item">
            <span className="language-list__wrap">
              <label className='language-list__label'>
                <input
                  className="checkbox-hidden visually-hidden"
                  type="checkbox"
                />
                <span className="checkbox checkbox--form language-list__checkbox"></span>
              </label>
              <svg
                className="language-list__icon-flag"
                width="24px"
                height="24px"
              >
                <use href={el.iconUrl}></use>
              </svg>
              <span>{el.name}</span>
              <span className="language-list__count">{el.count}</span>
              <svg
                className="language-list__icon-arrow"
                width="11px"
                height="6px"
              >
                <use href="images/icons.svg#icon-arrow_small"></use>
              </svg>
            </span>
            <input
              className="language-list__control "
              type="checkbox"

            />
            <ul className="levels-list">
              {el.levels.map((level , i) => (
                <li key={i} className="levels-list__item">
                  <label className="levels-list__label">
                    <input
                      className="radio-hidden visually-hidden"
                      type="radio"
                      name={'language' + el.name}
                    />
                    <span className="radio levels-list__radio">
                      <span className="radio__circle"> </span>
                    </span>
                    <p className="levels-list__name">{level.name}</p>{' '}
                    <p className="levels-list__count">{level.count}</p>
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageList;
