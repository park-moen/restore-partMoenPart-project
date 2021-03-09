import moment from 'moment';
import { fillZero } from './common';

export const makeTimeFormat = ({ hour = 0, minute = 0 }) => {
  let tmpHour = hour;
  let tmpMinute = minute;

  while (tmpMinute >= 60) {
    tmpHour += 1;
    tmpMinute -= 60;
  }
  const tmpTime = moment({ tmpHour, tmpMinute });

  const resultHour = tmpTime.hours().toString();
  const resultMinutes = tmpTime.minutes().toString();

  const displayTime = `${fillZero(2, resultHour)}:${fillZero(
    2,
    resultMinutes,
  )}`;

  return displayTime;
};
