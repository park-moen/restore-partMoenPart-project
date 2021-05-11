import React from 'react';
import { useDispatch } from 'react-redux';
import {
  reservationInit,
  scheduleIdInit,
} from '@/src/legacy/lib/redux/actions/reservationAction';

import PReservation from '@legacy_pReservation/PReservation';

export default function CReservation({ route, navigation }) {
  const dispatch = useDispatch();
  const { lectureInfo } = route.params;
  const { id } = lectureInfo;

  console.log('강의신청에서 받은 lectureInfo : ', lectureInfo);

  const onPressLeft = () => {
    dispatch(reservationInit());
    dispatch(scheduleIdInit());
    navigation.goBack();
  };
  const onPressRight = () => {
    navigation.navigate('CEquipment', { lectureInfo });
  };

  return (
    <PReservation
      lectureId={id}
      onPressLeft={onPressLeft}
      onPressRight={onPressRight}
    />
  );
}
