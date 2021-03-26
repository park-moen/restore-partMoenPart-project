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

export function equipmentSelect({ equipment, isChecked }) {
  return {
    type: types.RESERVATION_SELECT_EQUIPMENT,
    equipment,
    isChecked,
  };
}

export function equipmentInit() {
  return {
    type: types.RESERVATION_INIT_EQUIPMENT,
  };
}

export function descriptionChange({ description }) {
  return {
    type: types.RESERVATION_DESCRIPTION,
    description,
  };
}

export function descriptionInit() {
  return {
    type: types.RESERVATION_INIT_DESCRIPTION,
  };
}

export function setScheduleId({ scheduleId }) {
  return {
    type: types.RESERVATION_SCHEDULE_ID,
    scheduleId,
  };
}

export function scheduleIdInit() {
  return {
    type: types.RESERVATION_INIT_SCHEDULE_ID,
  };
}
