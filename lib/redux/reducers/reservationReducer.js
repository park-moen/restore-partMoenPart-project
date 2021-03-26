import types from 'lib/redux/actions/types';

const defaultState = {
  dateSelect: {},
};

export default function reservationReducer(state = defaultState, action) {
  let newState = null;
  switch (action.type) {
    case types.RESERVATION_SELECT:
      newState = {
        ...state,
        dateSelect: Object.assign(state.dateSelect, {
          [action.date]: { date: action.date, time: action.time },
        }),
      };
      console.log('여기는 리듀서 : ', newState);
      return newState;

    case types.RESERVATION_INIT:
      newState = {
        ...state,
        dateSelect: {},
      };
      console.log('여기는 리듀서 : ', newState);
      return newState;

    // 현재 상태 그대로 반환
    default:
      return state;
  }
}
