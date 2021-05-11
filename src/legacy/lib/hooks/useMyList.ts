import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/src/legacy/lib/redux/reducers';

export function useMyList() {
  const myList = useSelector(
    (state: RootState) => state.studentMyListReducer.myList,
  );
  return myList;
}
