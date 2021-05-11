import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import ButtomButtons from '@legacy_cCommon/BottomButtons';
// import When from '@legacy_cLectureDetail/TabNavigation/When';
import CReservationCalendar from '@legacy_cReservation/CReservationCalendar';
import CEquipment from '@legacy_cReservation/CEquipment';

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
