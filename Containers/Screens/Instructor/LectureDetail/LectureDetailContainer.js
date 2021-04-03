import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

import { LectureDetailAPIFunc } from 'lib/api/Lecture';
import TagList from 'Components/common/Tags';

import LectureDetailTabNav from './TabNavigation/LectureDetailTabNav';
import BottomButtons from '../../../common/BottomButtons';

const sampleImg = require('../../../../asset/lecture1.jpg');

export default function LectureDetailContainer({ navigation, route }) {
  const [lectureInfo, setLectureInfo] = useState({});

  useEffect(() => {
    axios
      .get(LectureDetailAPIFunc({ id: route.params.id }))
      .then(res => {
        console.log('강의 상세 조회 성공 : ', res.data);
        setLectureInfo(res.data);
      })
      .catch(err => console.log('강의 상세 조회 실패 : ', err));
  }, []);

  const onPressLeft = () => {
    navigation.goBack();
  };
  const onPressRight = () => {
    navigation.navigate('Reservation', { lectureInfo });
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView style={styles.rootContainer}>
        {/* 강의 이미지 슬라이드 */}
        <View style={styles.imageContainer}>
          <Image source={sampleImg} resizeMode="cover" style={styles.iamge} />
        </View>

        {/* 강의 기본내용 */}
        <View style={styles.tapContainer}>
          <Text style={styles.title}>{lectureInfo.title}</Text>
          <Text style={styles.price}>{`₩${lectureInfo.price}`}</Text>
          <TagList
            tags={[
              lectureInfo.groupName,
              lectureInfo.certificateKind,
              '장비대여 가능',
            ]}
            containerStyle={{ marginTop: 5, marginBottom: 10 }}
          />
          {/* <Text style={styles.description}>{lectureInfo.description}</Text> */}
        </View>

        {/* 강의상세 내용 - 탭뷰 */}
        <LectureDetailTabNav lectureInfo={lectureInfo} />
      </ScrollView>
      <BottomButtons
        TextLeft="이전"
        TextRight="강의신청"
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flex: 1,
    // borderWidth:2,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
    padding: 10,
    // borderWidth:1, backgroundColor:'green'
  },
  iamge: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  tapContainer: {
    margin: 20,
    marginBottom: 0,
    // borderWidth:1, backgroundColor:'yellow'
  },
  title: {
    fontSize: 27,
    fontWeight: '600',
    marginBottom: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#47CEC7',
    marginBottom: 5,
  },
  description: {
    color: 'darkgrey',
  },
});
