import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LectureSchedule } from '@legacy_cSchedule/LectureScheduleAll';
import CSchedulesUserSelected from '@legacy_cReservation/CSchedulesUserSelected';

/**
 *
 * @component 강의상세페이지 일정탭 컴포넌트
 */
export default function PReservationCalendar({
  lectureId,
  onDayPress,
  filteredSchedules,
}) {
  return (
    <View style={styles.rootContainer}>
      {lectureId ? (
        <LectureSchedule
          lectureId={lectureId}
          hideTitle="true"
          onDayPress={onDayPress}
        />
      ) : null}

      {filteredSchedules.length !== 0 ? (
        <CSchedulesUserSelected schedules={filteredSchedules} />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
  },
});
