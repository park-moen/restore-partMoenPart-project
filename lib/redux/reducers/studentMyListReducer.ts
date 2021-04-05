import { createAction, ActionType, createReducer } from 'typesafe-actions';

export type MyList = {
  reservationId: number;
  lectureTitle: string;
  totalCost: number;
  isMultipleCourse: boolean;
  dateOfReservation: any; //"2021-03-04"
};

// 액션 타입 선언
const MYLIST_INIT = 'myList/INIT';
const MYLIST_SET = 'myList/SET';

// 액션 생성 함수
export const myListInit = createAction(MYLIST_INIT)();
export const myListSet = createAction(
  MYLIST_SET,
  (myList: MyList[]) => myList,
)();

// 액션들의 객체 type
const actions = { myListInit, myListSet };
type MyListAction = ActionType<typeof actions>;

// 상태 타입
type MyListState = {
  myList: MyList[];
};

// 초기상태값
const initialState = {
  myList: [],
};

export const studentMyListReducer = createReducer<MyListState, MyListAction>(
  initialState,
  {
    [MYLIST_INIT]: state => ({ ...state, myList: [] }),
    [MYLIST_SET]: (state, action) => {
      const newstate = { ...state, myList: action.payload };
      console.log('학생 강의목록 리스트 리듀서 : ', newstate);
      return newstate;
    },
  },
);

export default studentMyListReducer;
