import React, { Fragment, useEffect, useState } from 'react';
import './stylesheets/main.scss';
import DoubleSlider from './components/DoubleSlider';
import Filters from './components/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvs } from './store/cvsSlice';
import Footer from './components/Footer';
import Header from './components/Header';
import CVCard from './components/CVCard';
import Pagination from './components/Pagination';
import { setResolution } from './store/viewSlice';
import { DESKTOP, PHONE } from './utils/constants';
import { getAgeFromBirthday } from './utils';

const App = React.memo(function App() {
  const [isFiltersShow, setIsFiltersShow] = useState(false);
  const [isDesktopFiltersShow, setIsDesktopFiltersShow] = useState(false);

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.cvs.currentPage);
  const totalCount = useSelector((state) => state.cvs.totalCount);
  const onlyPhoto = useSelector((state) => state.filters.photo);
  const resolution = useSelector((state) => state.view.resolution);

  const cvs = useSelector((state) => {
    return state.cvs.cvs;
  });

  const checkResolution = () => {
    if (window.matchMedia('(max-width: 767px)').matches)
      dispatch(setResolution(PHONE));
    else if (window.matchMedia('(min-width: 768px)').matches)
      dispatch(setResolution(DESKTOP));
  };

  useEffect(() => {
    dispatch(fetchCvs());
    checkResolution();
    document.addEventListener('resize', checkResolution);
  }, []);



  const onClickShowFilters = () => {
    setIsFiltersShow(true);
    document.querySelector('body').classList.add('modal-open');
  };

  const onClickCloseFilters = () => {
    setIsFiltersShow(false);
    document.querySelector('body').classList.remove('modal-open');
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container main__container">
          <section className="heading main__heading">
            <h2 className="heading__title">
              Мы подобрали <span className="heading__count">{totalCount}</span>
              &nbsp;резюме
            </h2>
            <p className="heading__text">
              Резюме продавец консультант во Всей Украине
            </p>
            <button className="heading__button">
              за все время
              <svg className="heading__button-icon" width="11px" height="6px">
                <use href="images/icons.svg#icon-arrow_small"></use>
              </svg>
            </button>
            <button
              className="heading__filters-button"
              onClick={onClickShowFilters}
            >
              <svg className="heading__button-icon" width="48px" height="48px">
                <use href="images/icons.svg#icon-filters"></use>
              </svg>
            </button>
          </section>
          <div className="main__bottom">
            <section className="cv-block main__bottom-first-el">
              {cvs.map((el, i) => {
                if (!onlyPhoto || (onlyPhoto && el.photo))
                  return (
                    <CVCard
                      key={i}
                      className={'cv-block__element'}
                      name={el.first_name}
                      age={getAgeFromBirthday(el.birthday)}
                      city={el.work_city || []}
                      workExperience={
                        el.work_experience_exist
                          ? el.workexperience.slice(-2)
                          : []
                      }
                      photoUrl={el.photo}
                    />
                  );
              })}

              <Pagination />
            </section>
            {isFiltersShow || resolution === DESKTOP ? (
              <Filters onClickClose={onClickCloseFilters} />
            ) : (
              ''
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
})

export default App;
