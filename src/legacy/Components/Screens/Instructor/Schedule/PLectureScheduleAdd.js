import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';

import LectureCalendar from '@legacy_cCommon/LectureCalendar';
import TimeSelectorContainer from '@legacy_cCommon/TimeSelector';
import ButtomButtons from '@legacy_cCommon/BottomButtons';
import TextInputContainer from '@legacy_cCommon/TextInputContainer';
import Button from '@legacy_cCommon/Button';
import SelectButton from '@legacy_cCommon/SelectButton';
/**
 *
 * @component 장소 하나 선택 컴포넌트
 */
const SelectSingleLocation = ({
  day = '2020-02-02',
  onBtnLocation = () => {},
  onLocationNameChange = () => {},
}) => {
  const [loactionName, setLocationName] = useState('');
  const setInput = name => {
    setLocationName(name); // 텍스트 인풋에 출력용 상태
    onLocationNameChange({ when: day, name }); // 부모 컴포넌트에서 상태 동기화
  };

  return (
    <View style={styles1.container}>
      <Text style={styles1.dayText}>{day}</Text>
      <TextInputContainer
        onTextChange={setInput}
        hideTitle
        placeholder="장소 이름을 지어주세요"
        style={styles1.textInputContainer}
      />
      <Button
        text="장소 선택"
        buttonStyle={styles1.buttonStyle}
        fontStyle={styles1.fontStyle}
        onPress={() => {
          onBtnLocation({ when: day });
        }}
      />
    </View>
  );
};
const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  dayText: { padding: 10, fontSize: 15 },
  textInputContainer: { width: '50%' },
  buttonStyle: { padding: 12 },
  fontStyle: { fontSize: 18 },
});

/**
 *
 * @component 일자별 장소 선택 컴포넌트
 */
const SelectLocationButtons = ({
  schedules,
  onBtnLocation = () => {},
  onLocationNameChange = () => {},
}) => {
  const array = [];

  schedules.forEach((element, i) => {
    array.push(
      <SelectSingleLocation
        key={i}
        day={element}
        onBtnLocation={onBtnLocation}
        onLocationNameChange={onLocationNameChange}
      />,
    );
  });

  const result = (
    <View style={styels2.container}>
      <Text style={styels2.text}>장소 선택</Text>
      {array}
    </View>
  );

  return result;
};
const styels2 = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'darkgrey',
    paddingTop: 20,
    paddingBottom: 50,
  },
  text: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

/**
 *
 * @view 일정 추가 뷰 (달력, 시간, 위치)
 */
export default function PLectureScheduleAdd({
  selectedScheduleArray,
  func,
  max,
  setMax,
}) {
  // 인원수 1부터 시작
  const personNumber = Array.from({ length: 50 }, (v, i) => i + 1);

  return (
    <SafeAreaView style={styles3.SafeAreaView}>
      <ScrollView>
        {/* 달력 */}
        <LectureCalendar onDateSelct={func.onDateSelct} />

        {/* 시간, 장소 지정 */}
        {selectedScheduleArray.length !== 0 ? (
          <>
            {/* 시간 지정 */}
            <View style={styles3.container}>
              <TimeSelectorContainer
                onSelectTime={func.onSelectTime}
                onScheduleObjChange={func.onScheduleObjChange}
                schedules={selectedScheduleArray}
                onDateIndexChange={func.onDateIndexChange}
              />
            </View>
            {/* 강의 소요시간, 수업 최대 인원 */}
            <View style={styles3.container}>
              <TextInputContainer
                title="강의 소요시간 (분)"
                onTextChange={func.onLectureTimeChange}
                placeholder="예) 1시간30분이라면 90 입력"
                style={{ padding: 10 }}
              />

              <SelectButton
                placeholder="수업 최대 인원"
                title="수업 최대 인원"
                hideTitle={false}
                data={personNumber}
                choice={max}
                setChoice={setMax}
                style={{ marginBottom: 10, padding: 10 }}
              />
            </View>
            {/* 장소 지정 */}
            <SelectLocationButtons
              onBtnLocation={func.onBtnLocation}
              onLocationNameChange={func.onLocationNameChange}
              schedules={selectedScheduleArray}
            />
          </>
        ) : null}
      </ScrollView>

      {/* 하단 버튼 */}
      <ButtomButtons
        TextLeft="이전"
        TextRight="등록 완료"
        onPressLeft={func.onPressLeft}
        onPressRight={func.onPressRight}
      />
    </SafeAreaView>
  );
}
const styles3 = StyleSheet.create({
  SafeAreaView: { backgroundColor: 'white', flex: 1 },
  container: {
    borderTopWidth: 1,
    borderColor: 'darkgrey',
    paddingTop: 10,
    paddingBottom: 20,
  },
});
