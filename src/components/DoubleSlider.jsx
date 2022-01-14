import React, { useEffect, useState } from 'react';

function DoubleSlider({ className }) {
  const [firstPosition, setFirstPosition] = useState(10);
  const [secondPosition, setSecondPosition] = useState(90);
  const [elementWidth, setElementWidth] = useState(0);
  useEffect(() => {
    const el = document.querySelector('.double-slider__line');
    setElementWidth(el.offsetWidth);
  }, []);
  const MAX_POSITION = 100;

  const pxToPercent = (px) => (px * 100) / elementWidth;

  let cursorPosition = 0;
  let whichSliderMoving = 0;

  const moveFirstSlider = (diff) => {
    setFirstPosition((prevState) => {
      const res = prevState + pxToPercent(diff);
      if (res < secondPosition && res >= 0) return res;
      return prevState;
    });
  };
  const moveSecondSlider = (diff) => {
    setSecondPosition((prevState) => {
      const res = prevState + pxToPercent(diff);
      if (res > firstPosition && res < 100) return res;
      return prevState;
    });
  };

  const mousemoveHandler = (e) => {
    const diff = e.clientX - cursorPosition;
    cursorPosition = e.clientX;
    if (whichSliderMoving === 1) moveFirstSlider(diff);
    else if (whichSliderMoving === 2) moveSecondSlider(diff);
  };

  const removeListener = () => {
    document.removeEventListener('mousemove', mousemoveHandler);
    document.removeEventListener('mouseup', removeListener);
    whichSliderMoving = 0;
  };

  const moveSlider = (e, slider) => {
    whichSliderMoving = slider;
    cursorPosition = e.clientX;
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseup', removeListener);
  };
  const translateRegardingParent = (position) => {
    return (elementWidth * position) / 100;
  };
  return (
    <div className={'double-slider ' + className}>
      <div className="double-slider__line">
        <div
          className="double-slider__first-circle"
          style={{
            transform: `translateX(${translateRegardingParent(
              firstPosition
            )}px)`,
          }}
          onMouseDown={(e) => moveSlider(e, 1)}
        >
          {' '}
        </div>
        <div
          className="double-slider__selected-line"
          style={{
            left: firstPosition + '%',
            right: MAX_POSITION - secondPosition + '%',
          }}
        >
          {' '}
        </div>
        <div
          className="double-slider__second-circle"
          style={{
            transform: `translateX(${translateRegardingParent(
              secondPosition
            )}px)`,
          }}
          onMouseDown={(e) => moveSlider(e, 2)}
        >
          {' '}
        </div>
      </div>
    </div>
  );
}

export default DoubleSlider;
