import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* 
{
	"_links": {"self": {"href": "http://localhost:8080/lecture/detail?id=146"}}, 
	"certificateKind": "level1", 
	"classKind": "프리다이빙", 
	"description": "수업내용을 입력합니다.", 
	"equipmentList": [{"name": "장비1", "price": 1000}, {"name": "장비2", "price": 2000}], 
	"groupName": "AIDA", 
	"id": 146, 
	"instructorId": 4, 
	"lectureUrlList": ["https://pungdong.s3.ap-northeast-2.amazonaws.com/lecture/t2%40test.com2021-01-30T23%3A26%3A26.549633.png"], "period": 4, 
	"price": 50000, 
	"region": "서울", 
	"studentCount": 5, 
	"swimmingPoolLocation": {"latitude": 10, "longitude": 10}, 
	"title": "토요일 테스트"
}
*/
//Tab Navigatior
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function What({ lectureInfo }) {
  console.log('lecture info : ', lectureInfo.id, lectureInfo.instructorId);
  return (
    <View style={styles.rootContainer}>
      <Text>{JSON.stringify(lectureInfo.description)}</Text>
      <Text>{JSON.stringify(lectureInfo.certificateKind)}</Text>
      <Text>{JSON.stringify(lectureInfo.classKind)}</Text>
      <Text>{JSON.stringify(lectureInfo.groupName)}</Text>
      {/* 강의 번호 */}
      <Text>{lectureInfo.id}</Text>
      {/* 강사 번호 */}
      <Text>{lectureInfo.instructorId}</Text>
    </View>
  );
}

const Where = ({ lectureInfo }) => {
  return <View style={styles.rootContainer}>{/* <Text>hi 2</Text> */}</View>;
};

const When = ({ lectureInfo }) => {
  return (
    <View style={styles.rootContainer}>
      {/* <Text>{JSON.stringify(lectureInfo.instructorId)}</Text> */}
    </View>
  );
};

const With = ({ lectureInfo }) => {
  return (
    <View style={styles.rootContainer}>
      {/* <Text>{JSON.stringify(lectureInfo.equipmentList)}</Text> */}
    </View>
  );
};

export default function LectureDetailTabNav({ lectureInfo }) {
  return (
    <Tab.Navigator style={{ flex: 1 }}>
      <Tab.Screen
        name="강의소개"
        children={() => <What lectureInfo={lectureInfo} />}
      />
      <Tab.Screen
        name="장소"
        children={() => <Where lectureInfo={lectureInfo} />}
      />
      <Tab.Screen
        name="일정"
        children={() => <When lectureInfo={lectureInfo} />}
      />
      <Tab.Screen
        name="장비대여"
        children={() => <With lectureInfo={lectureInfo} />}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'lightyellow',
    padding: 10,
    // height:500,
  },
});
