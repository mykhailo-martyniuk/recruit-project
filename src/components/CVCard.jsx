import React, { useState } from 'react';

function CVCard({ className, photoUrl, name, age, city, workExperience }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resolution = window.matchMedia("(max-width: 700px)")
  const getLastingWork = (startStr, endStr) => {
    const start = new Date(startStr);
    const end = new Date(endStr);

    const res = Math.floor((end - start) / 2592000000);
    if (res / 12 > 1) {
      return `${Math.floor(res / 12)} лет и ${Math.floor(res % 12)} мес.`;
    } else {
      return `${res} мес.`;
    }
  };

  const clickHandler = () => setIsModalOpen(!isModalOpen);
  return (
    <article className={'cv-card' + ' ' + className}>
      <img
        className="cv-card__img"
        src={photoUrl}
        alt=""
        width={resolution.matches ?'70px' :"164px"}
        height={resolution.matches ?'70px' :"164px"}
      />
      <div>
        <h3 className="cv-card__position">Продавец - консультант</h3>
        <div className="cv-card__name-block">
          <b className="cv-card__name">
            {name}, {age} года
          </b>
          <p className="cv-card__location">
            <svg className="cv-card__icon-location" width="12px" height="18px">
              <use href="images/icons.svg#icon-point"></use>
            </svg>
            {city.length ? city[0] : 'Kyiv, Ukraine'}
          </p>
        </div>
        <div className="cv-card__ex-work-block">
          {workExperience.map((el,i) => (
            <p key={i} className="cv-card__ex-work">
              {el.position} {el.company_name} -{' '}
              {getLastingWork(el.date_from, el.date_to)}
            </p>
          ))}
        </div>
        <div className="cv-card__ex-status-block">
          <p className="cv-card__since-update">Обновлено 9 минут назад</p>
          <p className="cv-card__status">
            <span className="cv-card__status-circle"></span>Онлайн
          </p>

          <div className="cv-card__button-block">
            <button className="cv-button">
              <svg width="24px" height="24px">
                <use href="images/icons.svg#icon-heart"></use>
              </svg>
            </button>
            <button className="cv-button" onClick={clickHandler}>
              <svg width="24px" height="24px">
                <use href="images/icons.svg#icon-more"></use>
              </svg>
            </button>
          </div>
          {isModalOpen ? (
            <div className="cv-options">
              <button className="cv-options__button">Пожаловаться</button>
              <button className="cv-options__button">Скрыть кандидата</button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </article>
  );
}

export default CVCard;
