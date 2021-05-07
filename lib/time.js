import moment from 'moment';
import { fillZero } from '@lib/common.tsx';

export const makeTimeFormat = ({ hour = 0, minute = 0 }) => {
  let tmpHour = parseInt(hour, 10);
  let tmpMinute = parseInt(minute, 10);

  while (tmpMinute >= 60) {
    tmpHour += 1;
    tmpMinute -= 60;
  }
  const tmpTime = moment({ hour: tmpHour, minute: tmpMinute });
  const resultHour = tmpTime.hours().toString();
  const resultMinutes = tmpTime.minutes().toString();
  const displayTime = `${fillZero(2, resultHour)}:${fillZero(
    2,
    resultMinutes,
  )}`;

  return displayTime;
};
