import React from 'react';

function CheckboxList({data, title}) {
  return (
    <div className='checkbox-list'>
      <h4 className="filters-form__title checkbox-list__title">{title}</h4>
      <div className='horizontal-line'></div>
      <ul className="vertical-list checkbox-list__list">
        {data.map((el, i) => (
          <li key={i} className="vertical-list__item checkbox-list__item">
            <label className='checkbox-list__label'>
              <input
                className="checkbox-hidden visually-hidden"
                type="checkbox"
              />
              <span className="checkbox checkbox--form checkbox-list__checkbox"> </span>
              <span className='checkbox-list__text'>{el.text || el.name}</span>
              <span className='checkbox-list__count'>{el.count}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxList;
