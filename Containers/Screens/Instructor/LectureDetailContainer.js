//app.js
// import LectureDetailContainer from './Containers/Screens/Instructor/LectureDetailContainer';
//--------------

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';

import { LectureDetailAPIFunc } from '../../../config/strings';
import TagList from '../../../Components/common/Tags';

import LectureDetailTabNav from './LectureDetailTabNav';

export default function LectureDetailContainer({ navigation, route }) {
  const [lectureInfo, setLectureInfo] = useState({});

  // "title" : "강의1",
  // "classKind" : "스쿠버다이빙",
  // "groupName" : "AIDA",
  // "certificateKind" : "LEVEL1",
  // "description" : "강의 설명",
  // "price" : 300000,
  // "period" : 4,
  // "studentCount" : 5,
  // "region" : "서울",
  // "instructorId" : 10,
  // "lectureUrlList" : [ "File URL1" ],
  // "equipmentList" : [ {
  //     "name" : "장비1",
  //     "price" : 3000
  // } ],
  // "swimmingPoolLocation" : {
  //     "latitude" : 10.0,
  //     "longitude" : 10.0
  // },
  // "_links" : {
  //     "self" : {
  //         "href" : "http://localhost:8080/lecture/detail?id=1"
  //     }
  // }

  useEffect(() => {
    axios
      .get(LectureDetailAPIFunc({ id: route.params.id }))
      .then(res => {
        console.log('강의 상세 조회 성공 : ', res.data);
        setLectureInfo(res.data);
      })
      .catch(err => console.log('강의 상세 조회 실패 : ', err));
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      {/* 강의 이미지 슬라이드 */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../asset/lecture1.jpg')}
          resizeMode="cover"
          style={styles.iamge}
        />
      </View>

      {/* 강의 기본내용 */}
      <View style={styles.tapContainer}>
        <Text style={styles.title}>{lectureInfo.title}</Text>
        <Text style={styles.price}>₩{lectureInfo.price}</Text>
        <TagList
          tags={[
            lectureInfo.groupName,
            lectureInfo.certificateKind,
            '장비대여 가능',
          ]}
          containerStyle={{ marginTop: 5, marginBottom: 10 }}
        />
        <Text style={styles.description}>{lectureInfo.description}</Text>
      </View>

      {/* 강의상세 내용 - 탭뷰 */}
      <LectureDetailTabNav lectureInfo={lectureInfo} />
    </ScrollView>
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
