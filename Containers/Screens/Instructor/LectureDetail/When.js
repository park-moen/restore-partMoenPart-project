import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

import { LectureSchedule } from '../LectureScheduleAll';

const SchedulesUserSelected = ({ schedules }) => {
  console.log('schedules', schedules);

  const result = [];
  schedules.forEach((singleSchedule, i) => {
    const singleScheduleComponents = [];
    console.log('singleSchedule : ', singleSchedule);

    const period = singleSchedule.period;

    // 단일 일정 내의 구체적인 날짜와 시간 처리
    singleSchedule.scheduleDetails.forEach(singleDay => {
      const date = singleDay.date;
      const lectureTime = singleDay.lectureTime;
      const where = singleDay.location.address;
      console.log('date : ', date);

      singleScheduleComponents.push(
        // 일정 안의 하루하루에 대한 컨테이너
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
            borderWidth: 0.3,
          }}
        >
          <Text style={{ padding: 5 }}>{date}</Text>
          <Text style={{ padding: 5 }}>{lectureTime}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ padding: 5 }}>{where}</Text>
          </View>
        </View>,
      );
    });

    result.push(
      // 단일 일정 하나에 대한 컨테이너
      <View key={i} style={{ borderWidth: 2, margin: 2 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 2,
            backgroundColor:
              period > 1 ? 'rgba(0,200,250,0.3)' : 'rgba(255,0,204,0.3)',
          }}
        >
          {period > 1 ? (
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                padding: 2,
              }}
            >{`다회차 클래스 (${period}일)`}</Text>
          ) : (
            <Text style={{ fontSize: 15, fontWeight: '600', padding: 2 }}>
              원데이 클래스
            </Text>
          )}
          <View
            style={{
              padding: 5,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#33CC00',
            }}
          >
            <Text>예약가능</Text>
          </View>
        </View>
        {singleScheduleComponents}
      </View>,
    );
  });

  return result;
};

export default function Where({ lectureInfo }) {
  const schedules = lectureInfo.schedules; // 전체 일정 오브젝트 배열

  const [filteredSchedules, setFilteredSchedules] = useState([]);

  const onDayPress = selectedDay => {
    const dayFilter = schedule => {
      const scheduleDetails = schedule.scheduleDetails; // 단일 일정 상세정보 (날짜별 오브젝트 배열)
      const filteredSchedules = scheduleDetails.filter(singleScheduleDetail => {
        return singleScheduleDetail.date === selectedDay.dateString; // return T/F
      });

      return filteredSchedules.length >= 1;
    };

    const filteredSchedules = schedules.filter(dayFilter);
    setFilteredSchedules(filteredSchedules);

    console.log('filteredSchedules : ', filteredSchedules);
  };

  return (
    <View style={styles.rootContainer}>
      <LectureSchedule lectureId={2} hideTitle="true" onDayPress={onDayPress} />
      {/* 실제 강의 id랑 매칭 시키려면 lectureId={lectureInfo.id} */}

      {filteredSchedules.length !== 0 ? (
        <SchedulesUserSelected schedules={filteredSchedules} />
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
