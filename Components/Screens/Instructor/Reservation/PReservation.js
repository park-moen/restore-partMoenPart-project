import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import ButtomButtons from '@cCommon/BottomButtons';
// import When from '@cLectureDetail/TabNavigation/When';
import CReservationCalendar from '@cReservation/CReservationCalendar';
import CEquipment from '@cReservation/CEquipment';

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
