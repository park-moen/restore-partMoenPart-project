import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LectureSchedule } from '@cSchedule/LectureScheduleAll';
import NMapModal from '@cCommon/NMapModal';
import {
  CTimesComponent,
  CEachDay,
} from '@cLectureDetail/TabNavigation/When';

/**
 *
 * @component 예약 시간별 컴포넌트
 */
export const PTimesComponent = ({
  times,
  maxNumber,
  gps,
  where,
  mapVisible,
  onMapExit,
  onMapView,
}) => {
  const eachTimes = [];

  times.forEach((eachTime, i) => {
    eachTimes.push(
      <View
        // eslint-disable-next-line react/no-array-index-key
        key={`eachTime${i}`}
        style={stylesEachTime.container}
      >
        <Text style={stylesEachTime.text}>{`- ${eachTime.startTime}`}</Text>
        <Text style={stylesEachTime.text}>
          {`${eachTime.currentNumber}/${maxNumber}`}
        </Text>
      </View>,
    );
  });

  return (
    <View style={stylesEachTime.rootContainer}>
      <View>
        <View style={stylesEachTime.timesContainer}>
          <Text style={stylesEachDay.timeTitle}>예약 가능 시간</Text>
        </View>
        {eachTimes}
      </View>
      <NMapModal
        picker={gps}
        visible={mapVisible}
        onPressExit={onMapExit}
        title={where}
      />
      <View style={stylesEachTime.buttonContainer}>
        <TouchableOpacity style={stylesEachTime.mapButton} onPress={onMapView}>
          <Text>지도보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const stylesEachTime = StyleSheet.create({
  rootContainer: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  timesContainer: { justifyContent: 'space-between', flexDirection: 'row' },
  container: { marginLeft: 10, flexDirection: 'row', alignItems: 'center' },
  text: { padding: 5 },
  buttonContainer: {
    height: 35,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
  },
  mapButton: {
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
 * @component 구체적인 하루에 대한 컴포넌트
 */
export const PEachDay = ({
  scheduleDetails,
  order,
  array,
  maxNumber,
  visible,
  onPressMore,
}) => {
  const { date, lectureTime, scheduleTimeDtoList: times } = scheduleDetails;
  const { address: where, latitude, longitude } = scheduleDetails.location;
  const gps = { latitude, longitude };

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
          onPress={onPressMore}
        >
          <>
            <Text>더보기</Text>
            <MaterialCommunityIcons name="menu-down" size={15} />
          </>
        </TouchableOpacity>
      </View>
      {visible ? (
        <CTimesComponent
          times={times}
          maxNumber={maxNumber}
          gps={gps}
          where={where}
        />
      ) : null}
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
  const result = [];
  schedules.forEach((singleSchedule, i) => {
    const singleScheduleComponents = [];

    const { period, maxNumber } = singleSchedule;

    // 단일 일정 내의 구체적인 날짜와 시간 처리
    singleSchedule.scheduleDetails.forEach((singleDay, y, array) => {
      singleScheduleComponents.push(
        <CEachDay
          // eslint-disable-next-line react/no-array-index-key
          key={`singleDay${y}`}
          scheduleDetails={singleDay}
          order={y}
          array={array}
          maxNumber={maxNumber}
        />,
      );
    });

    result.push(
      // 단일 일정에 대한 컨테이너
      <View
        // eslint-disable-next-line react/no-array-index-key
        key={`singleSchedule${i}`}
        style={stylesSingleSchedule.rootContainer}
      >
        <View
          style={{
            ...stylesSingleSchedule.titleContainer,
            backgroundColor:
              period > 1 ? 'rgba(0,200,250,0.3)' : 'rgba(255,0,204,0.3)',
          }}
        >
          {period > 1 ? (
            <Text style={stylesSingleSchedule.titleText}>
              {`다회차 클래스 (${period}일)`}
            </Text>
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
export default function PWhen({ lectureId, onDayPress, filteredSchedules }) {
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
