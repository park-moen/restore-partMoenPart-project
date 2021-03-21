import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import PReservation from 'Components/Screens/Instructor/Reservation/PReservation';
import CEquipment from './CEquipment';

export default function CReservation({ route, navigation }) {
  const { lectureInfo } = route.params;
  const { id } = lectureInfo;

  console.log('강의신청에서 받은 lectureInfo : ', lectureInfo);

  const onPressLeft = () => navigation.goBack();
  const onPressRight = () => {};

  return (
    <PReservation
      lectureInfo={lectureInfo}
      lectureId={id}
      onPressLeft={onPressLeft}
      onPressRight={onPressRight}
    />
  );
}
