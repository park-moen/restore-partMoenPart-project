import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
// import { Checkbox } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import NMapModal from '@legacy_cCommon/NMapModal';

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
  onDateSelect,
}) {
  const radioProps = [];

  times.forEach((eachTime, i) => {
    radioProps.push({
      label: `${eachTime.startTime}   ${eachTime.currentNumber}/${maxNumber}`,
      scheduleTimeId: eachTime.scheduleTimeId,
    });
  });

  return (
    <View style={stylesEachTime.rootContainer}>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={stylesEachTime.timesContainer}>
          <Text style={stylesEachTime.timeTitle}>예약 가능 시간</Text>
        </View>
        <RadioButtonRN
          box
          data={radioProps}
          animationTypes={['pulse']}
          selectedBtn={onDateSelect}
          boxActiveBgColor="#e1f5fe33"
        />
        <View style={stylesEachTime.buttonContainer}>
          <TouchableOpacity
            style={stylesEachTime.mapButton}
            onPress={onMapView}
          >
            <Text>지도보기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NMapModal
        picker={gps}
        visible={mapVisible}
        onPressExit={onMapExit}
        title={where}
      />
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
    paddingTop: 10,
    paddingBottom: 10,
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
