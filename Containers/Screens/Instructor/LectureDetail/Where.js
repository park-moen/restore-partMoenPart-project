import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';

import NMapModal from './NMapModal';

/**
 *
 * @component 일정 하나에 대한 세부 일정 묶어서 반환
 */
const SingleSchedule = ({ element, onButtonClick = () => {} }) => {
  const result = [];

  element.scheduleDetails.forEach((singleDay, y) => {
    const location = singleDay.location;
    result.push(
      <View key={y} style={styles1.container}>
        <Text style={styles1.text}>{`${y + 1}회차`}</Text>
        <Text style={styles1.text}>{singleDay.date}</Text>
        <Text style={styles1.text}>{location.address}</Text>
        <Button
          title="보기"
          onPress={() =>
            onButtonClick(
              {
                latitude: location.latitude,
                longitude: location.longitude,
              },
              location.address,
            )
          }
        />
      </View>,
    );
  });

  return result;
};
const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
  },
});

/**
 *
 * @component 일정별 강의장소
 */
export default function Where({ lectureInfo }) {
  const result = [];
  const [picker, setPicker] = useState({
    latitude: 37.564362,
    longitude: 126.977011,
  });
  const [visible, setVisible] = useState(false);
  const [locName, setLocName] = useState('');

  const schedules = lectureInfo.schedules;
  if (schedules === undefined) return null;

  schedules.forEach((element, i) => {
    const days = element.scheduleDetails.length;

    result.push(
      <View style={styles2.container} key={i}>
        <Text style={styles2.title}>
          {days === 1 ? '원데이 클래스' : '다회차 클래스'}
        </Text>
        <SingleSchedule
          element={element}
          onButtonClick={(p1, name) => {
            setPicker(p1);
            setVisible(!visible);
            setLocName(name);
          }}
        />
      </View>,
    );
  });
  console.log('장소를 알고싶다 : ', schedules);

  const onPressExit = () => {
    setVisible(false);
  };

  return (
    <>
      {result}
      <View style={{ width: '100%', height: 300, flex: 1 }}>
        <NMapModal
          picker={picker}
          visible={visible}
          onPressExit={onPressExit}
          title={locName}
        />
      </View>
    </>
  );
}

const styles2 = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    margin: 5,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontWeight: '600',
  },
});
