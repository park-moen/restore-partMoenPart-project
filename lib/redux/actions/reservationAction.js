import types from 'lib/redux/actions/types';

export function reservationSelect({ date, time }) {
  return {
    type: types.RESERVATION_SELECT,
    date,
    time,
  };
}

export function reservationInit() {
  return {
    type: types.RESERVATION_INIT,
  };
}
