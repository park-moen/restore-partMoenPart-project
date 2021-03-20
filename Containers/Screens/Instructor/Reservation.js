import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import ButtomButtons from '../../common/BottomButtons';
import When from './LectureDetail/When';

export default function Reservation({
  route,
  // schedules = 'hi',
  onPressLeft = () => {},
  onPressRight = () => {},
}) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flex: 1 }}>
        <When lectureId={route.params.lectureId} />
      </View>

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
