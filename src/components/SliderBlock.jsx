import DoubleSlider from './DoubleSlider';
import React from 'react';

function SliderBlock({ text, title }) {
  return (
    <div className="slider-block">
      <h4 className="slider-block__title filters-form__title">{title}</h4>
      <div className="horizontal-line horizontal-line--small slider-block__line">
        {' '}
      </div>
      <DoubleSlider className="slider-block__slider" />
      <div className="slider-block__button-block">
        <span className="slider-block__span ">от</span>
        <input
          className="number-input slider-block__input"
          type="number"
          placeholder="18"
        />
        <span className="slider-block__span">до</span>
        <input
          className="number-input slider-block__input"
          type="number"
          placeholder="40"
        />
        <span className="slider-block__span">{text}</span>
      </div>
    </div>
  );
}
export default SliderBlock;
