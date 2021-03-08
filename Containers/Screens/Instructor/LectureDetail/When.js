import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LectureSchedule } from '../LectureScheduleAll';
import NMapModal from './NMapModal';

/**
 *
 * @component 구체적인 하루에 대한 컴포넌트
 */
const EachDay = ({ schedule, order, array }) => {
  const [visible, setVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  console.log('EachDay schedule : ', schedule);

  const date = schedule.date;
  const lectureTime = schedule.lectureTime;
  const where = schedule.location.address;
  const gps = {
    latitude: schedule.location.latitude,
    longitude: schedule.location.longitude,
  };
  const times = schedule.startTimes; // 예약가능시간 배열

  console.log('date : ', date);

  const TimesComponent = () => {
    const result = [];

    times.forEach((element, i) => {
      result.push(
        <View
          key={i}
          style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={stylesEachDay.text}>{`- ${element}`}</Text>
          <Text style={stylesEachDay.text}>5명/10명</Text>
        </View>,
      );
    });

    const onPressExit = () => {
      setMapVisible(false);
    };

    return (
      <View
        style={{
          padding: 5,
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}
          >
            <Text style={stylesEachDay.timeTitle}>예약 가능 시간</Text>
          </View>
          {result}
        </View>
        <NMapModal
          picker={gps}
          visible={mapVisible}
          onPressExit={onPressExit}
          title={where}
        />
        <View
          style={{
            height: 35,
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={stylesEachDay.mapButtonContainer}
            onPress={() => {
              setMapVisible(true);
            }}
          >
            <Text>지도보기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={stylesEachDay.rootContainer}>
        <View style={stylesEachDay.dateContainer}>
          <Text style={stylesEachDay.text}>{date}</Text>
          {array.length !== 1 ? (
            <Text style={stylesEachDay.text}>{`(${order + 1}회차)`}</Text>
          ) : null}
        </View>
        <Text style={stylesEachDay.text}>{lectureTime}</Text>
        <Text style={stylesEachDay.text}>{where}</Text>
        <TouchableOpacity
          style={stylesEachDay.moreButtonConatiner}
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <>
            <Text>더보기</Text>
            <MaterialCommunityIcons name="menu-down" size={15} />
          </>
        </TouchableOpacity>
      </View>
      {visible ? <TimesComponent /> : null}
    </>
  );
};
const stylesEachDay = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    borderWidth: 0.3,
  },
  dateContainer: { flexDirection: 'row' },
  text: { padding: 5 },
  moreButtonConatiner: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#5EBAF2',
    padding: 5,
    alignItems: 'center',
  },
  timeTitle: {
    fontWeight: '600',
    fontSize: 15,
    padding: 5,
  },
  mapButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 7,
    padding: 8,
    backgroundColor: '#3CC83B',
    alignItems: 'center',
  },
});

/**
 *
 * @component 유저가 선택한 날짜와 관련된 일정 출력
 */
const SchedulesUserSelected = ({ schedules }) => {
  console.log('schedules', schedules);
  const result = [];

  schedules.forEach((singleSchedule, i) => {
    const singleScheduleComponents = [];
    console.log('singleSchedule : ', singleSchedule);

    const period = singleSchedule.period;

    // 단일 일정 내의 구체적인 날짜와 시간 처리
    singleSchedule.scheduleDetails.forEach((singleDay, y, array) => {
      singleScheduleComponents.push(
        <EachDay schedule={singleDay} order={y} array={array} />,
      );
    });

    result.push(
      // 단일 일정에 대한 컨테이너
      <View key={i} style={stylesSingleSchedule.rootContainer}>
        <View
          style={{
            ...stylesSingleSchedule.titleContainer,
            backgroundColor:
              period > 1 ? 'rgba(0,200,250,0.3)' : 'rgba(255,0,204,0.3)',
          }}
        >
          {period > 1 ? (
            <Text
              style={stylesSingleSchedule.titleText}
            >{`다회차 클래스 (${period}일)`}</Text>
          ) : (
            <Text style={stylesSingleSchedule.titleText}>원데이 클래스</Text>
          )}
          <View style={stylesSingleSchedule.possibleContainer}>
            <Text>예약가능</Text>
          </View>
        </View>
        {singleScheduleComponents}
      </View>,
    );
  });

  return result;
};
const stylesSingleSchedule = StyleSheet.create({
  rootContainer: { borderWidth: 2, margin: 2 },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    padding: 2,
  },
  possibleContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#33CC00',
  },
});

/**
 *
 * @component 강의상세페이지 일정탭 컴포넌트
 */
export default function When({ lectureInfo }) {
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
