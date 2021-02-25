import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import NaverMap from '../../common/NaverMap';

import ButtomButtons from '../../common/BottomButtons';
import { TextInputStatic } from '../../common/TextInputContainer';

export default function LectureLocationAdd({ navigation }) {
  const [baseLocation, setBaseLocation] = useState({
    latitude: 37.564362,
    longitude: 126.977011,
  });
  const [picker, setPicker] = useState({ latitude: 0, longitude: 0 });

  const baseLocationChange = ({ latitude, longitude }) => {
    setBaseLocation({ latitude, longitude });
    console.log('LectureLocation에서도 동기화 됨 : ', baseLocation);
  };

  const pickerChange = ({ latitude, longitude }) => {
    setPicker({ latitude, longitude });
    console.log('LectureLocation에서도 동기화 됨 : ', picker);
  };

  const onSearchbar = () => {
    navigation.navigate('NMapSearch', {
      baseLocationChange,
    });
  };

  const onPressLeft = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TextInputStatic
        hideTitle={true}
        text="도로명, 지번, 영문 주소를 입력하세요."
        style={{ padding: 10 }}
        onPress={onSearchbar}
      />
      <View style={{ flex: 1 }}>
        <NaverMap
          center={baseLocation}
          baseLocationChange={baseLocationChange}
          picker={picker}
          pickerChange={pickerChange}
        />
      </View>
      <ButtomButtons
        TextLeft="이전"
        TextRight="선택 완료"
        onPressLeft={onPressLeft}
      />
    </SafeAreaView>
  );
}
