import {MSINYEAR} from './constants';

export const getAgeFromBirthday = (strDate) => {
  const date = new Date(strDate);
  const dateNow = Date.now();
  const age = Math.floor((dateNow - date) / MSINYEAR);
  return age;
};