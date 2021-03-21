import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import ButtomButtons from 'Containers/common/BottomButtons';
// import When from 'Containers/Screens/Instructor/LectureDetail/TabNavigation/When';
import CReservationCalendar from 'Containers/Screens/Instructor/Reservation/CReservationCalendar';
import CEquipment from 'Containers/Screens/Instructor/Reservation/CEquipment';

export default function PReservation({
  lectureId,
  lectureInfo,
  onPressLeft = () => {},
  onPressRight = () => {},
}) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <CReservationCalendar lectureId={lectureId} />
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
