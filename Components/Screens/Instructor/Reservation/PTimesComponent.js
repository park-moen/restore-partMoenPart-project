import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { Checkbox } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import NMapModal from 'Containers/common/NMapModal';

/**
 *
 * @component 예약 시간별 컴포넌트
 */
export default function PTimesComponent({
  times,
  maxNumber,
  gps,
  where,
  mapVisible,
  onMapExit,
  onMapView,
}) {
  const eachTimes = [];

  times.forEach((eachTime, i) => {
    eachTimes.push(
      <View
        // eslint-disable-next-line react/no-array-index-key
        key={`eachTime${i}`}
        style={stylesEachTime.container}
      >
        <CheckBox checked={false} containerStyle={{ padding: 0 }} />
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
          <Text style={stylesEachTime.timeTitle}>예약 가능 시간</Text>
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
}
const stylesEachTime = StyleSheet.create({
  timeTitle: {
    fontWeight: '600',
    fontSize: 15,
    padding: 5,
  },
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
