import React from 'react';
import { SafeAreaView, View } from 'react-native';
import NaverMap from 'Containers/common/NaverMap';

import ButtomButtons from 'Containers/common/BottomButtons';
import { TextInputStatic } from 'Containers/common/TextInputContainer';

export default function PLectureLocationAdd({ center, picker, func }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TextInputStatic
        hideTitle={true}
        text="도로명, 지번, 영문 주소를 입력하세요."
        style={{ padding: 10 }}
        onPress={func.onSearchbar}
      />
      <View style={{ flex: 1 }}>
        <NaverMap
          center={center}
          baseLocationChange={func.baseLocationChange}
          picker={picker}
          pickerChange={func.pickerChange}
        />
      </View>
      <ButtomButtons
        TextLeft="이전"
        TextRight="선택 완료"
        onPressLeft={func.onPressLeft}
        onPressRight={func.onPressRight}
      />
    </SafeAreaView>
  );
}
