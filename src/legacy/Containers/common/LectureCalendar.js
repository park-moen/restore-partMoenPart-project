import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import RadioForm from 'react-native-simple-radio-button';

LocaleConfig.locales.kr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1.',
    '2.',
    '3',
    '4',
    '5',
    '6',
    '7.',
    '8',
    '9.',
    '10.',
    '11.',
    '12.',
  ],
  dayNames: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  dayNamesShort: ['월.', '화.', '수.', '목.', '금.', '토.', '일.'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

export default function LectureCalendar({ onDateSelct = () => {} }) {
  const [radioChoice, setRadioChoice] = useState(0);
  const radio_props = [
    { label: '원데이 클래스       ', value: 0 },
    { label: '다회차 클래스', value: 1 },
  ];

  const [datesArray, setDatesArray] = useState([]); // ['2020-02-01', '2020-02-02'];

  // 달력 선택 표시용 상태
  const [markedDatesObjects, setMarkedDatesObjects] = useState({}); // { "2021-02-01": {"selected": true}, "2021-02-02": {"selected": true} }
  let marked = {};

  const onOnedayPress = date => {
    /* --- 달력 컴포넌트 내부 상태 관리 --- */
    // 달력에 선택된 날짜 배열
    const dateArray = [date.dateString];
    // // // console.log("dateArray : ", dateArray, " Range : ", dateArray.length);

    // 달력 렌더링용 오브젝트로 변환
    const tmp = dateArray.reduce(
      (c, v) => Object.assign(c, { [v]: { selected: true, marked: true } }),
      {},
    );
    // // // console.log("tmp : ", tmp);

    setDatesArray(dateArray);
    setMarkedDatesObjects(tmp);

    // 부모컴포넌트에서 넘어온 추가 함수
    onDateSelct(dateArray);
  };

  const onMultidayPress = date => {
    /* --- 달력 컴포넌트 내부 상태 관리 --- */
    const tmp = datesArray.concat(date.dateString);

    // 달력 렌더링용 오브젝트로 변환
    tmp.forEach(val => {
      marked[val] = { selected: true };
    }),
      // // // console.log("dateArray : ", tmp, " Range : ", tmp.length);

      setDatesArray(tmp);
    setMarkedDatesObjects(marked);

    //부모 컴포넌트에서 넘어온 추가 함수
    onDateSelct(tmp);
  };

  return (
    <>
      <Calendar
        markedDates={markedDatesObjects}
        onDayPress={radioChoice === 0 ? onOnedayPress : onMultidayPress}
        markingType={'multi-dot'}
      />
      <RadioForm
        radio_props={radio_props}
        initial={0}
        onPress={value => {
          setRadioChoice(value);
          setDatesArray([]);
          setMarkedDatesObjects({});
          onDateSelct([]);
        }}
        formHorizontal={true}
        labelHorizontal={true}
        animation={true}
        style={{ margin: 15, paddingLeft: 10 }}
      />
    </>
  );
}
