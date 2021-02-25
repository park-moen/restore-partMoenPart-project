import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import axios from 'axios';
import { LectureDetailAPIFunc } from '../../../config/strings';
import Button from '../../common/Button';

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

export default function LectureScheduleContainer({ navigation, route }) {
  const [schedules2, setSchedules2] = useState({});

  useEffect(() => {
    const getLectureDetail = async () => {
      const hi = await axios.get(LectureDetailAPIFunc({ id: route.params.id }));

      const schedules = hi.data.schedules;
      console.log('getDetail : ', schedules);
      schedules.forEach((element, index) => {
        console.log('-----일정-----'); // 일정 하나 (일회차, 다회차 큰 틀에서 하나)

        // 랜덤 색상 설정
        const color = `hsl(${360 * Math.random()}, 70%, 60%)`;

        element.scheduleDetails.forEach(element => {
          console.log('single schedule : ', element);
          console.log('날짜 : ', element.date);
          console.log('시간 : ', element.startTimes);

          console.log('schedules2 : ', schedules2);
          const tmpArray = schedules2[element.date]
            ? schedules2[element.date].periods
            : [];
          console.log('tmpArray1 : ', tmpArray);

          tmpArray.push({ startingDay: false, endingDay: false, color });
          console.log('tmpArray2 : ', tmpArray);
          const newObjs = Object.assign(schedules2, {
            [element.date]: { periods: tmpArray },
          });
          setSchedules2(newObjs);
          console.log('나는야 전체일정 관리 오브젝트 : ', newObjs);
        });
      });
    };

    getLectureDetail();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
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
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}
      >
        <Button
          text="일정 추가"
          onPress={() => {
            navigation.navigate('LectureScheduleAdd');
          }}
        />
        {/* <Button text="버튼 킵" onPress={() => { console.log("test") }}/> */}
      </View>
    </SafeAreaView>
  );
}
