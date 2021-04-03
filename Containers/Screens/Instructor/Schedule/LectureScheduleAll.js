import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import axios from 'axios';
import Button from '@cCommon/Button';
import { getLectureSchedule } from '@lib/api/Lecture';

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
export function LectureSchedule({
  lectureId,
  hideTitle = 'false',
  onDayPress = day => {
    console.log('selected day : ', day);
  },
}) {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const getLectureDetail = async () => {
      const response = await getLectureSchedule({ lectureId });
      console.log('response : ', response);
      if (response) {
        const { scheduleDtoList } = response.data._embedded; // 강의의 전체 일정

        scheduleDtoList.forEach(singleSchedule => {
          // 일정 하나
          // 랜덤 색상 설정
          const color = `hsl(${360 * Math.random()}, 70%, 60%)`;
          const { scheduleDetails } = singleSchedule;
          scheduleDetails.forEach(singleDay => {
            // 일정 내부의 하루하루

            const tmpArray = markedDates[singleDay.date]
              ? markedDates[singleDay.date].periods
              : [];

            tmpArray.push({ startingDay: false, endingDay: false, color });
            const newObjs = Object.assign(markedDates, {
              [singleDay.date]: { periods: tmpArray },
            });
            setMarkedDates(JSON.parse(JSON.stringify(newObjs)));
          });
        });
      }
    };

    console.log('lectureId : ', lectureId);
    if (lectureId !== undefined) getLectureDetail();
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      {hideTitle === 'true' ? null : (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
        >
          <Text style={{ fontSize: 25 }}>전체 일정</Text>
        </View>
      )}
      <Calendar
        markedDates={markedDates}
        markingType="multi-period"
        onDayPress={onDayPress}
      />
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
