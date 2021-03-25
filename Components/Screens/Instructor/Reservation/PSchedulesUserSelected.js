import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CEachDay from 'Containers/Screens/Instructor/Reservation/CEachDay';

/**
 *
 * @component 유저가 선택한 날짜와 관련된 일정 출력
 */
export default function PSchedulesUserSelected({ schedules }) {
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
          {/* <TouchableOpacity
            style={stylesEachDay.moreButtonConatiner}
            onPress={() => {}} // onPress={onPressMore}
          >
            <>
              <Text>더보기</Text>
              <MaterialCommunityIcons name="menu-down" size={15} />
            </>
          </TouchableOpacity> */}
        </View>
        {singleScheduleComponents}
      </View>,
    );
  });

  return result;
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
});
