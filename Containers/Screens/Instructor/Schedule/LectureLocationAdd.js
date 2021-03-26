import React, { useState } from 'react';

import LectureLocationAddComponent from 'Components/Screens/Instructor/Schedule/PLectureLocationAdd';

export default function LectureLocationAdd({ navigation, route }) {
  const [baseLocation, setBaseLocation] = useState({
    latitude: 37.564362,
    longitude: 126.977011,
  });
  const [picker, setPicker] = useState({ latitude: 0, longitude: 0 });

  const baseLocationChange = ({ latitude, longitude }) => {
    setBaseLocation({ latitude, longitude });
    // // console.log('LectureLocation에서도 동기화 됨 : ', baseLocation);
  };

  const pickerChange = ({ latitude, longitude }) => {
    setPicker({ latitude, longitude });
    // // console.log('LectureLocation에서도 동기화 됨 : ', picker);
  };

  const onSearchbar = () => {
    navigation.navigate('NMapSearch', {
      baseLocationChange,
    });
  };

  const onPressLeft = () => {
    navigation.goBack();
  };

  const onPressRight = () => {
    route.params.onLocationSelected({ picker });
  };

  const func = {
    baseLocationChange,
    pickerChange,
    onSearchbar,
    onPressLeft,
    onPressRight,
  };

  return (
    <LectureLocationAddComponent
      func={func}
      center={baseLocation}
      picker={picker}
    />
  );
}
