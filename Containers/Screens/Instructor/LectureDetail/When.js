import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LectureSchedule } from '../LectureScheduleAll';

export default function Where({ lectureInfo }) {
  return (
    <View style={styles.rootContainer}>
      <LectureSchedule lectureId={2} />
      {/* 실제 강의 id랑 매칭 시키려면 lectureId={lectureInfo.id} */}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
  },
});
