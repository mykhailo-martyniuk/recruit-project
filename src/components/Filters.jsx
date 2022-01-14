import classNames from 'classnames';
import {
  education,
  employmentType,
  gender,
  workExperience,
} from '../data';
import React from 'react';
import CheckboxList from './CheckboxList';
import LanguageList from './LanguageList';
import SliderBlock from './SliderBlock';
import SwitchBlock from './SwitchBlock';
import { useDispatch, useSelector } from 'react-redux';
import { setOnlyPhoto } from '../store/filtersSlice';

function Filters({onClickClose}) {
  const onlyPhoto = useSelector((state) => state.filters.photo);

  const dispatch = useDispatch();

  const onChangeOnlyPhoto = () => {
    dispatch(
      setOnlyPhoto({
        photo: !onlyPhoto,
      })
    );
  };

  return (
    <section className="filters-block">
      <button className="filters-block__close-button" onClick={onClickClose}>
        <svg  width="24px" height="24px">
          <use href="images/icons.svg#icon-close"></use>
        </svg>
      </button>
      <h3 className="filters-block__title">Фильтры</h3>
      <form className="filters-form">
        <div className="filters-form__container">
          <SwitchBlock
            text="Только с фотографией"
            checked={onlyPhoto}
            onChange={onChangeOnlyPhoto}
            icon="images/icons.svg#icon-loud_speaker"
          />
        </div>
        <div className="filters-form__container">
          <SliderBlock title="Возраст" text="лет" />
        </div>
        <div className="filters-form__container">
          <h4 className="filters-form__title">Пол</h4>
          <div className="filters-form__gender-buttons">
            {gender.map((el,i) => (
              <button
                key={i}
                className={classNames(
                  'rectangle-button filters-form__rectangle-button',
                  {
                    'rectangle-button--active': el.selected,
                  }
                )}
              >
                {el.name}
              </button>
            ))}
          </div>
        </div>
        <div className="filters-form__container">
          <SliderBlock title="Желаемая зарплата" text="грн" />
          <SwitchBlock
            text="
            Не показывать без зарплаты"
            checked={true}
            className="filters-form__switch-block-bottom"
          />
        </div>
        <div className="filters-form__container">
          <CheckboxList data={workExperience} title={'Опыт работы'} />
          <SwitchBlock
            text="Только студенты"
            checked={false}
            icon="images/icons.svg#icon-student"
            className="filters-form__switch-block-bottom"
          />
        </div>
        <div className="filters-form__container">
          <LanguageList />
        </div>
        <div className="filters-form__container">
          <CheckboxList data={employmentType} title={'Тип занятости'} />
        </div>
        <div className="filters-form__container">
          <CheckboxList data={education} title={'Образование'} />
        </div>
      </form>
    </section>
  );
}

export default Filters;
