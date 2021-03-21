import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import ButtomButtons from '../../../../Containers/common/BottomButtons';
import When from '../../../../Containers/Screens/Instructor/LectureDetail/TabNavigation/When';
import CEquipment from '../../../../Containers/Screens/Instructor/Reservation/CEquipment';

export default function PReservation({
  navigation,
  lectureId,
  lectureInfo,
  onPressLeft = ()=>{},
  onPressRight = () => {},
}) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <When lectureId={lectureId} />
        <CEquipment lectureInfo={lectureInfo} />
      </ScrollView>

      {/* 하단 버튼 */}
      <ButtomButtons
        TextLeft="이전"
        TextRight="등록 완료"
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
      />
    </SafeAreaView>
  );
}
