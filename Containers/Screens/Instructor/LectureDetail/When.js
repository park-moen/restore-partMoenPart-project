import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import { LectureSchedule } from '../LectureScheduleAll';
import NMapModal from './NMapModal';
// api
import { GetLectureSchedule } from '../../../../config/strings';


/**
 *
 * @component 구체적인 하루에 대한 컴포넌트
 */
const EachDay = ({
  schedule,
  order,
  array,
  // maxNumber
}) => {
  const [visible, setVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  // console.log('EachDay schedule : ', schedule);

  const { date } = schedule; // 강의날짜
  const { lectureTime } = schedule; // 소요시간
  const where = schedule.location.address;
  const gps = {
    latitude: schedule.location.latitude,
    longitude: schedule.location.longitude,
  };
  const times = schedule.scheduleTimeDtoList; // 예약가능시간 배열
  // console.log('times : ', times);

  const TimesComponent = () => {
    const result = [];

    times.forEach((eachTime, i) => {
      result.push(
        <View
          // eslint-disable-next-line react/no-array-index-key
          key={`eachTime${i}`}
          style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}
        >
          <Text style={stylesEachDay.text}>{`- ${eachTime.startTime}`}</Text>
          <Text style={stylesEachDay.text}>
            {`${eachTime.currentNumber}/10명`}
          </Text>
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
const SchedulesUserSelected = ({ schedules, maxNumber }) => {
  const result = [];

  schedules.forEach((singleSchedule, i) => {
    const singleScheduleComponents = [];
    // console.log('singleSchedule : ', singleSchedule);

    const { period } = singleSchedule;

    // 단일 일정 내의 구체적인 날짜와 시간 처리
    singleSchedule.scheduleDetails.forEach((singleDay, y, array) => {
      singleScheduleComponents.push(
        <EachDay
          // eslint-disable-next-line react/no-array-index-key
          key={`singleDay${y}`}
          schedule={singleDay}
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
export default function When({ lectureId }) {
  const [schedules, setSchedules] = useState([{}]); // 전체 일정 오브젝트 배열
  // const [max, setMax] = useState(0); // 전체 일정 오브젝트 배열
  // const lectureId = lectureInfo.id;

  useEffect(() => {
    const fetch = async () => {
      if(lectureId !== undefined){
      // 백엔드에서 일정 받아오기
      const response = await axios.get(GetLectureSchedule, {
        params: {lectureId}
      });

      console.log("일정좀 받아라", response);

        // eslint-disable-next-line no-shadow
        const { scheduleDtoList } = response.data._embedded;
        // console.log('fetched schedules : ', scheduleDtoList);
        // console.log('max : ', max, maxNumber);
        setSchedules(scheduleDtoList);
        // setMax(maxNumber);
      }
      

        /* 
        일정 파싱
        scheduleDtoList.forEach(singleSchedule => {
          // console.log('single schedule : ', singleSchedule);
          const { scheduleDetails } = singleSchedule;
          scheduleDetails.forEach(singleDay => {
            // console.log('하루에 대한 일정 : ', singleDay);
            // console.log('날짜: ', singleDay.date);
            singleDay.scheduleTimeDtoList.forEach(eachTime => {
              // console.log('startTime : ', eachTime.startTime);
              // console.log('current number : ', eachTime.currentNumber);
            });
          });
        }); 
        */
    };

    if(lectureId !== undefined)
      fetch();

  }, [lectureId]);

  const [filteredSchedules, setFilteredSchedules] = useState([]);

  const onDayPress = selectedDay => {
    const dayFilter = singleSchedule => {
      // console.log('dayFilter singleSchedule : ', singleSchedule);
      const { scheduleDetails } = singleSchedule; // 단일 일정 상세정보 (날짜별 오브젝트 배열)
      // console.log('When : scheduleDetails : ', scheduleDetails);
      const filteredScheduleDetails = scheduleDetails.filter(singleDay => {
        return singleDay.date === selectedDay.dateString; // return T/F
      });

      return filteredScheduleDetails.length >= 1;
    };

    if (schedules) {
      // eslint-disable-next-line no-shadow
      const filteredSchedules = schedules.filter(dayFilter); // 전체 일정에서 필터를 걺
      // console.log('선택된 날짜와 관련된 일정들 : ', filteredSchedules);
      setFilteredSchedules(filteredSchedules);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <LectureSchedule lectureId={2} hideTitle="true" onDayPress={onDayPress} />
      {/* 실제 강의 id랑 매칭 시키려면 lectureId={lectureInfo.id} */}

      {filteredSchedules.length !== 0 ? (
        <SchedulesUserSelected
          schedules={filteredSchedules}
          // maxNumber={maxNumber}
        />
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
