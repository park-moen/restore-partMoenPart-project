import { combineReducers } from 'redux';
import reservationReducer from '@/src/legacy/lib/redux/reducers/reservationReducer';
import studentMyListReducer from '@/src/legacy/lib/redux/reducers/studentMyListReducer';

const rootReducer = combineReducers({
  reservationReducer,
  studentMyListReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
