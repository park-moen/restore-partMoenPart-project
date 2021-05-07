import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/reducers';

export function useMyList() {
  const myList = useSelector(
    (state: RootState) => state.studentMyListReducer.myList,
  );
  return myList;
}
