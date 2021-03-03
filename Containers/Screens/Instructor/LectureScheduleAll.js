import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import axios from 'axios';
import { LectureDetailAPIFunc } from '../../../config/strings';
import Button from '../../common/Button';

/**
 * 달력 환경 설정
 */
LocaleConfig.locales.kr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1.',
    '2.',
    '3',
    '4',
    '5',
    '6',
    '7.',
    '8',
    '9.',
    '10.',
    '11.',
    '12.',
  ],
  dayNames: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  dayNamesShort: ['월.', '화.', '수.', '목.', '금.', '토.', '일.'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

/**
 *
 * @component 강의전체 일정 출력 캘린더 컴포넌트
 */
export function LectureSchedule({ lectureId }) {
  const [schedules2, setSchedules2] = useState({});

  useEffect(() => {
    const getLectureDetail = async () => {
      const hi = await axios.get(LectureDetailAPIFunc({ id: lectureId }));

      const schedules = hi.data.schedules;
      // console.log('getDetail : ', schedules);

      schedules.forEach((element, index) => {
        // console.log('-----일정-----'); // 일정 하나 (일회차, 다회차 큰 틀에서 하나)

        // 랜덤 색상 설정
        const color = `hsl(${360 * Math.random()}, 70%, 60%)`;

        element.scheduleDetails.forEach(e => {
          // console.log('single schedule : ', e);

          const tmpArray = schedules2[e.date] ? schedules2[e.date].periods : [];

          tmpArray.push({ startingDay: false, endingDay: false, color });
          const newObjs = Object.assign(schedules2, {
            [e.date]: { periods: tmpArray },
          });
          setSchedules2(newObjs);
        });
      });
    };

    getLectureDetail();
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View
        style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
      >
        <Text style={{ fontSize: 25 }}>전체 일정</Text>
      </View>
      {schedules2 === {} ? null : (
        <Calendar markedDates={schedules2} markingType="multi-period" />
      )}
      <Text>일정1</Text>
      <Text>일정2</Text>
      <Text>일정3</Text>
    </View>
  );
}

/**
 *
 * @component 강의전체일정 출력 화면
 */
export default function LectureScheduleContainer({ navigation, route }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      {/* <View style={{ justifyContent: 'center', margin: 15 }}> */}
      <LectureSchedule lectureId={route.params.id} />
      <Button
        text="일정 추가"
        onPress={() => {
          navigation.navigate('LectureScheduleAdd', { id: route.params.id });
        }}
      />
      {/* </View> */}
    </SafeAreaView>
  );
}
