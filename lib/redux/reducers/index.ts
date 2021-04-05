import { combineReducers } from 'redux';
import reservationReducer from '@lib/redux/reducers/reservationReducer';
import studentMyListReducer from '@lib/redux/reducers/studentMyListReducer';

const rootReducer = combineReducers({
  reservationReducer,
  studentMyListReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
