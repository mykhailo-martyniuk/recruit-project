import React from 'react';
import SocialMediaList from './SocialMediaLIst';

function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="footer__top-container">
          <div className="list-with-title footer__top-el">
            <h4 className="list-with-title__title">Другое</h4>
            <ul className="list-with-title__list">
              <li className="list-with-title__item">
                <a className="list-with-title__link" href="">
                  Про Нас
                </a>
              </li>
              <li className="list-with-title__item">
                <a href="">Блог</a>
              </li>
            </ul>
          </div>
          <div className="list-with-title footer__top-el">
            <h4 className="list-with-title__title">Сотрудничество с нами</h4>
            <ul className="list-with-title__item">
              <li className="list-with-title__item">
                <a className="list-with-title__link" href="">
                  Реклама на сайте
                </a>
              </li>
              <li className="list-with-title__item">
                <a className="list-with-title__link" href="">
                  Партнерская программа
                </a>
              </li>
              <li className="list-with-title__item">
                <a className="list-with-title__link" href="">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <SocialMediaList />
        </div>

        <div className="horizontal-line"></div>
        <ul className="list-with-line footer__bottom-container">
          <li className="list-with-line__item list-with-line__item--white footer__bottom-item">
            <a className="list-with-line__link" href="">
              Privacy Policy
            </a>
          </li>
          <li className="list-with-line__item list-with-line__item--white footer__bottom-item">
            © 2021 All rights reserved
          </li>
          <li className="list-with-line__item list-with-line__item--white footer__bottom-item">
            <a className="list-with-line__link" href="">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
