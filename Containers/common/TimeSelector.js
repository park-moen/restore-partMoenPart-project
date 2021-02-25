import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import { fillZero } from '../../lib/common';

export function TimeSelector({
  startHour = 0,
  startMinute = 0,
  onSelectTime,
  initButtonStates = [],
}) {
  const times = [];
  const SelectTime = ({ displayTime, onSelectTime, initState = false }) => {
    const [clicked, setClicked] = useState(initState);

    useEffect(() => {
      // console.log("개별 시간 요소의 on/off 상태 : ", initState);
      // console.log("버튼 상태 : ", clicked);
    }, []);

    const onPressed = () => {
      onSelectTime({ clicked, displayTime }); // 선택된 시간배열 수정

      setClicked(!clicked); // 버튼 on/off 모습변화
    };

    return (
      <TouchableOpacity
        style={
          !clicked
            ? styles.timeButton
            : { ...styles.timeButton, backgroundColor: 'rgba(0, 0, 0, 0.1)' }
        }
        onPress={onPressed}
        initState={initState}
      >
        <View>
          <Text
            style={
              !clicked
                ? styles.timeText
                : { ...styles.timeText, color: 'darkgrey' }
            }
          >
            {displayTime}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // console.log("이 날짜의 버튼 상태 : ", initButtonStates);

  let tmpTime = moment({ hour: startHour, minute: startMinute });
  for (let i = 0; i < 48; i++) {
    const resultHour = tmpTime.hours().toString();
    const resultMinutes = tmpTime.minutes().toString();

    const displayTime = `${fillZero(2, resultHour)}:${fillZero(
      2,
      resultMinutes,
    )}`;

    const test = initButtonStates.find(e => e === displayTime);
    // console.log("test : ", test, " clicked : ", test != undefined);
    times.push(
      <SelectTime
        displayTime={displayTime}
        onSelectTime={onSelectTime}
        initState={test !== undefined}
        key={i}
      />,
    );

    tmpTime = tmpTime.add(30, 'm');
  }

  return times;
}

export default function TimeSelectorContainer({
  onLeftArrowPressed = () => {},
  onRightArrowPressed = () => {},
  onSelectTime = () => {},
  onScheduleObjChange = () => {},
  schedules,
}) {
  const [dateNowPrintedIndex, setDateNowPrintedIndex] = useState(0); // 날짜 인덱스 (화면변화 요구됨)
  const [selectedTimes, setSelectedTimes] = useState([]); // 선택된 예약가능 시간 배열
  const [final, setFinal] = useState({}); // 최종 일정 오브젝트 {날짜:[시간, ... ], 날짜:[시간, ...], ... }

  // 예약시간 날짜 화살표 좌우 클릭 시
  const timesInitOrBack = changedIndex => {
    const tmpTimes = final[schedules[changedIndex]]; // 해당 날짜에 대한 예약시간배열

    tmpTimes == undefined || tmpTimes == []
      ? setSelectedTimes([]) // 초기화
      : setSelectedTimes(tmpTimes); // 되돌리기
  };
  const onLeftArrowPressedFunc = () => {
    const changedIndex = dateNowPrintedIndex - 1;

    dateNowPrintedIndex > 0
      ? setDateNowPrintedIndex(changedIndex)
      : console.log('끝에 도달했습니다.');

    timesInitOrBack(changedIndex); // 날짜 바뀌었으니 배열 초기화 or 해당날짜에 대한 시간으로 복구
  };
  const onRightArrowPressedFunc = () => {
    const changedIndex = dateNowPrintedIndex + 1;

    dateNowPrintedIndex < schedules.length - 1
      ? setDateNowPrintedIndex(changedIndex)
      : console.log('끝에 도달했습니다.');

    timesInitOrBack(changedIndex); // 날짜 바뀌었으니 배열 초기화 or 해당날짜에 대한 시간으로 복구
  };

  const onSelectTimeFunc = ({ clicked, displayTime }) => {
    // console.log("선택된 시간 : ", displayTime);

    console.log('selectedTimes 배열 : ', selectedTimes);

    let result = [];
    // on->off : 취소, off->on : 선택
    if (clicked) {
      // 시간 선택 해제
      result = selectedTimes.filter(words => words !== displayTime); // 배열 반환
      setSelectedTimes(result);
      console.log('시간 선택 배열 현황 : ', result);

      // 오브젝트화
      // console.log("날짜 배열 : ", schedules, " 현재 선택 : ", schedules[dateNowPrintedIndex]);
      const copyObjs = Object.assign({}, final);
      const newObjs = Object.assign(copyObjs, {
        [schedules[dateNowPrintedIndex]]: result,
      });
      setFinal(newObjs);
      console.log('오브젝트 : ', newObjs);

      // 부모 컴포넌트에 동기화
      onScheduleObjChange(newObjs);
    } else {
      // 시간 선택 (추가)
      result = selectedTimes.concat(displayTime);
      setSelectedTimes(result);
      console.log('시간 선택 배열 현황 : ', result);

      // 오브젝트화
      // console.log("날짜 배열 : ", schedules, " 현재 선택 : ", schedules[dateNowPrintedIndex]);
      const copyObjs = Object.assign({}, final);
      const newObjs = Object.assign(copyObjs, {
        [schedules[dateNowPrintedIndex]]: result,
      });
      setFinal(newObjs);
      console.log('오브젝트 : ', newObjs);

      // 부모 컴포넌트에 동기화
      onScheduleObjChange(newObjs);
    }

    onSelectTime(result); // 부모 컴포넌트에 전달
  };

  return (
    <View style={{ height: 350, padding: 10, alignItems: 'center' }}>
      {/* 예약시간과 연관된 날짜 선태 헤더 */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 5,
        }}
      >
        {dateNowPrintedIndex > 0 ? (
          <TouchableOpacity
            onPress={onLeftArrowPressedFunc}
            style={{ width: 20 }}
          >
            <AntDesign name="left" color="#40BDF2" size={20} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 20 }} />
        )}
        <Text style={styles.scheduleTitle}>예약 가능 시간</Text>
        {dateNowPrintedIndex < schedules.length - 1 ? (
          <TouchableOpacity
            onPress={onRightArrowPressedFunc}
            style={{ width: 20 }}
          >
            <AntDesign name="right" color="#40BDF2" size={20} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 20 }} />
        )}
      </View>

      {/* 예약시간 지정할 날짜 */}
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
        {schedules[dateNowPrintedIndex]}
      </Text>

      {/* 시간 선택 컴포넌트 */}
      <ScrollView style={{ padding: 10, flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <TimeSelector
            onSelectTime={onSelectTimeFunc}
            initButtonStates={final[schedules[dateNowPrintedIndex]]}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleTitle: {
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  timeButton: {
    backgroundColor: '#80cfff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 3,
    height: 50,
    width: 80,
    borderRadius: 3,
  },
  timeText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
