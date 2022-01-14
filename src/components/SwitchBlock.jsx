import Switch from './Switch';
import React from 'react';

function SwitchBlock({ icon, text, checked, className, onChange = () => {} }) {
  return (
    <label className={'switch-block' + ' ' + className}>
      {icon ? (
        <svg
          className="filters-form__photo-icon switch-block__icon"
          width="24px"
          height="24px"
        >
          <use href={icon}></use>
        </svg>
      ) : (
        ''
      )}
      <span className=" switch-block__text filters-form__text">{text}</span>
      <Switch
        onChange={onChange}
        className="filters-form__switch switch-block_switch"
        checked={checked}
      />
    </label>
  );
}

export default SwitchBlock;
