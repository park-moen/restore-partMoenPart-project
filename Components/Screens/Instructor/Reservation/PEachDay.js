import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CTimesComponent from 'Containers/Screens/Instructor/Reservation/CTimesComponent';

/**
 *
 * @component 구체적인 하루에 대한 컴포넌트
 */
export default function PEachDay({
  scheduleDetails,
  order,
  array,
  maxNumber,
  visible,
  // onPressMore,
}) {
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
        {/* <TouchableOpacity
          style={stylesEachDay.moreButtonConatiner}
          onPress={onPressMore}
        >
          <>
            <Text>더보기</Text>
            <MaterialCommunityIcons name="menu-down" size={15} />
          </>
        </TouchableOpacity> */}
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
}
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
