import types from 'lib/redux/actions/types';

const defaultState = {
  reservationDateList: {},
  equipmentList: [],
  description: '',
  scheduleId: null,
};

export default function reservationReducer(state = defaultState, action) {
  let newState = null;
  switch (action.type) {
    case types.RESERVATION_SELECT:
      newState = {
        ...state,
        reservationDateList: Object.assign(state.reservationDateList, {
          [action.date]: { date: action.date, time: action.time },
        }),
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_INIT:
      newState = {
        ...state,
        reservationDateList: {},
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_SELECT_EQUIPMENT:
      newState = {
        ...state,
        equipmentList: action.isChecked
          ? state.equipmentList.concat(action.equipment)
          : state.equipmentList.filter(
              equipment => equipment !== action.equipment,
            ),
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_INIT_EQUIPMENT:
      newState = {
        ...state,
        equipmentList: [],
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_DESCRIPTION:
      newState = {
        ...state,
        description: action.description,
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_INIT_DESCRIPTION:
      newState = {
        ...state,
        description: '',
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_SCHEDULE_ID:
      newState = {
        ...state,
        scheduleId:
          action.scheduleId === state.scheduleId ? null : action.scheduleId,
        reservationDateList: {},
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_INIT_SCHEDULE_ID:
      newState = {
        ...state,
        scheduleId: null,
      };
      console.log('강의예약 리듀서 : ', newState);
      return newState;

    // 현재 상태 그대로 반환
    default:
      return state;
  }
}
