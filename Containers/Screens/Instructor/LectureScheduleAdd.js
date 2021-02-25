import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import LectureCalendar from '../../common/LectureCalendar';
import TimeSelectorContainer from '../../common/TimeSelector';
import TextInputContainer from '../../../Containers/common/TextInputContainer';
import ButtomButtons from '../../../Containers/common/BottomButtons';

export default function LectureScheduleAdd({ navigation }) {
  /* ---- 모달 출력용 ----- */
  // const data = ['hi', 'h2']; //모달 출력용 배열
  // const [visible, setVisible] = useState(false); //모달 on/off용 상태
  /* ------------------- */

  //달력 컴포넌트에서 선택된 날짜 배열 저장용 상태
  const [selectedScheduleArray, setSelectedScheduleArray] = useState([]); // ['2020-02-01', '2020-02-02'];
  //예약가능 시간 관리
  const [selectedTimes, setSelectedTimes] = useState([]);
  //날짜별 선택 시간을 오브젝트로 관리
  const [selectedScheduleObject, setSelectedScheduleObject] = useState({});

  //선택된 날짜 관리
  const onDateSelct = result => {
    console.log('부모 컴포넌트 저장된 날짜 : ', result);
    setSelectedScheduleArray(result);
  };

  //선택된 시간 관리 (예약 가능한 시간 지정)
  const onSelectTime = selectedTimes => {
    setSelectedTimes(selectedTimes);
  };

  const onScheduleObjChange = changedScheduleObject => {
    console.log(
      '부모 컴포넌트에서 날짜 오브젝트 잘 관리되나? : ',
      changedScheduleObject,
    );
    setSelectedScheduleObject(changedScheduleObject);
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView>
        {/* 달력 */}
        <LectureCalendar onDateSelct={onDateSelct} />

        {/* 예약 가능 시간 지정 */}
        {selectedScheduleArray.length != 0 ? (
          <TimeSelectorContainer
            onSelectTime={onSelectTime}
            onScheduleObjChange={onScheduleObjChange}
            schedules={selectedScheduleArray}
          />
        ) : null}

        {/* <TextInputContainer style={{ margin: 10 }} title="수업장소명" />
                <Button title="일정 열기" onPress={() => { setVisible(!visible) }} />
                <TimePicker data={data} visible={visible} setVisible={setVisible} /> */}
        <Button
          title="장소 선택"
          onPress={() => {
            navigation.navigate('LectureLocation');
          }}
        />
      </ScrollView>

      {/* 하단 버튼 */}
      <ButtomButtons
        TextLeft="이전"
        TextRight="등록 완료"
        onPressLeft={() => {
          navigation.goBack();
        }}
        onPressRight={() => {
          // navigation.navigate('LectureLocation');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scheduleTitle: {
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});
