import React, { useState } from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

import TextInputContainer from '../../../common/TextInputContainer';
import BottomButtons from '../../../common/BottomButtons';
import EquipmentRental from './EquipmentRental';
import * as URL from '../../../../config/strings';

export default function LectureFeeAndEquipments({ navigation, route }) {
  const [lectureFee, setLectureFee] = useState('');
  const [equipmentList, setEquipmentList] = useState([{ name: '', price: 0 }]);

  const onLeftButton = () => {
    navigation.goBack();
  };
  const onRightButton = async () => {
    const request = {
      title: route.params.data.lectureTitle,
      classKind: route.params.data.category,
      groupName: route.params.data.association,
      certificateKind: route.params.data.certificate,
      description: route.params.data.lectureContent,
      price: lectureFee,
      period: 4,
      studentCount: route.params.data.max,
      region: route.params.data.area,
      swimmingPoolId: 1,
      equipmentList,
    };

    const formdata = new FormData();

    const data = JSON.stringify(request);
    formdata.append('request', {
      string: data,
      type: 'application/json',
    });

    // // console.log('image type : ', route.params.image.type);
    formdata.append('fileList', {
      name: 'hello.jpg',
      type: route.params.image.type,
      uri: route.params.image.uri,
    });

    axios
      .post(URL.NewLectureAPI, formdata, {
        headers: {
          IsRefreshToken: 'false',
          'Content-Type':
            'multipart/form-data; boundary=someArbitraryUniqueString',
        },
      })
      .then(res => {
        console.log('강의등록 성공', res);
        navigation.navigate('Main');
      })
      .catch(err => console.log('강의등록 에러 : ', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, margin: 10 }}>
        <TextInputContainer
          onTextChange={setLectureFee}
          title="강의 수강료"
          placeholder="수업 가격을 입력하세요."
          style={{ flex: 1, marginBottom: 10 }}
        />
        <EquipmentRental
          equipmentList={equipmentList}
          setEquipmentList={setEquipmentList}
        />
      </ScrollView>
      <BottomButtons
        TextLeft="이전"
        TextRight="강의등록"
        onPressLeft={onLeftButton}
        onPressRight={onRightButton}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
