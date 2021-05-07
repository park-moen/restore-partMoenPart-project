import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CEachDay from '@cReservation/CEachDay';

export default function PEachSchedule({ singleSchedule, onPressMore }) {
  const singleScheduleComponents = [];
  const { period, maxNumber, scheduleId } = singleSchedule;

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
        // visible={visible}
        scheduleId={scheduleId}
      />,
    );
  });

  return (
    <View style={stylesSingleSchedule.rootContainer}>
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
        <TouchableOpacity
          style={stylesSingleSchedule.moreButtonConatiner}
          onPress={onPressMore}
        >
          <>
            <Text>더보기</Text>
            <MaterialCommunityIcons name="menu-down" size={15} />
          </>
        </TouchableOpacity>
      </View>
      {singleScheduleComponents}
    </View>
  );
}
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
  moreButtonConatiner: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#5EBAF2',
    padding: 5,
    alignItems: 'center',
  },
});
