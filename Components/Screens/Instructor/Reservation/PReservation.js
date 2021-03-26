import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import ButtomButtons from 'Containers/common/BottomButtons';
// import When from 'Containers/Screens/Instructor/LectureDetail/TabNavigation/When';
import CReservationCalendar from 'Containers/Screens/Instructor/Reservation/CReservationCalendar';
import CEquipment from 'Containers/Screens/Instructor/Reservation/CEquipment';

export default function PReservation({
  lectureId,
  onPressLeft = () => {},
  onPressRight = () => {},
}) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <CReservationCalendar lectureId={lectureId} />
      </ScrollView>

      {/* 하단 버튼 */}
      <ButtomButtons
        TextLeft="이전"
        TextRight="다음"
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
      />
    </SafeAreaView>
  );
}
