import React from 'react';
import { Button, SafeAreaView } from 'react-native';

// import PopAlert from '@pCommon/PopAlert';
import { makeTimeFormat } from '@lib/time';
import { Logout, RefreshToken } from '@lib/api/TokenActivity';

const testLectureId = 8;

export default function Main({ navigation }) {
  const btnLogout = () => {
    Logout({ navigation });
  };

  const btnNewLecture = () => {
    navigation.navigate('NewLecture');
  };

  const btnLectureList = () => {
    navigation.navigate('LectureList', {
      certificateKind: 'level1',
      region: '서울',
      costCondition: {
        max: 200000,
        min: 10000,
      },
      groupName: 'AIDA',
    });
  };

  const btnLectureDetail = () => {
    navigation.navigate('LectureDetail', { id: testLectureId });
  };

  const btnShowSchedule = () => {
    navigation.navigate('LectureScheduleAll', { id: testLectureId });
  };

  const btnAddLocation = () => {
    navigation.navigate('LectureLocationAdd');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF' }}
    >
      <Button title="로그아웃" onPress={btnLogout} />
      <Button title="토큰 재발급" onPress={RefreshToken} />

      <Button title="강의 등록" onPress={btnNewLecture} />

      <Button title="강의 목록 조회" onPress={btnLectureList} />
      <Button title="강의 상세 조회" onPress={btnLectureDetail} />

      <Button title="일정 조회" onPress={btnShowSchedule} />
      <Button title="위치 추가" onPress={btnAddLocation} />
    </SafeAreaView>
  );
}
