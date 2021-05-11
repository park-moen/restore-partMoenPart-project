import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PMyLecture from '@legacy_pStudent/PMyLecture';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParams } from '@/App';

import { studentMyLectureAPI } from '@/src/legacy/lib/api/Lecture';
import {
  myListSet,
  MyList,
} from '@/src/legacy/lib/redux/reducers/studentMyListReducer';

type Props = StackScreenProps<StackParams, 'StudentMyLecture'>;

export function CMyLecture({ route, navigation }: Props): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const res: any = await studentMyLectureAPI(0, 5);
      dispatch(myListSet(res.reservationSubInfoList));
    };
    fetch();
  }, []);
  return <PMyLecture name={route.params.name} />;
}

export default CMyLecture;
