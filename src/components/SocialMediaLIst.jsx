import React from 'react';
import { socialMediaList } from '../data';

function SocialMediaList() {
  return (
    <ul className="social-media-list footer__top-el">
      {socialMediaList.map((el, i) => (
        <li className="social-media-list__item" key={i}>
          <a href="">
            <svg className="social-media-list__icon" width="24px" height="24px">
              <use href={el.iconUrl}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaList;
