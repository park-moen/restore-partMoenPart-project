import React, { useState } from 'react';
import axios from 'axios';

import PLectureScheduleAdd from '../../../../Components/Screens/Instructor/Schedule/PLectureScheduleAdd';
import { LectureAddScheduleAPI } from '../../../../config/strings';
import { makeTimeFormat } from '../../../../lib/time';

export default function LectureScheduleAdd({ navigation, route }) {
  // 달력 컴포넌트에서 선택된 날짜 배열 저장용 상태
  const [selectedScheduleArray, setSelectedScheduleArray] = useState([]); // ['2020-02-01', '2020-02-02'];
  // 예약가능 시간 관리
  const [selectedTimes, setSelectedTimes] = useState([]); // ["05:00", "05:30", "07:00"]
  // 날짜별 선택 시간을 오브젝트로 관리
  const [selectedScheduleObject, setSelectedScheduleObject] = useState({}); // {"2021-02-18": ["05:00", "05:30", "07:00"], ... }
  // 날짜별 장소를 오브젝트로 관리
  const [locations, setLocations] = useState({}); // {"2021-02-17": {"latitude": 37.56249100503885, "longitude": 126.97587374338121, "name": "잠실수영장"}, ... }
  // 예약시간 지정하고 있는 현재 날짜 관리
  const [curDateIndex, setCurDateIndex] = useState(0);
  // 최대 인원
  const [max, setMax] = useState('');

  /**
   *
   * @function 날짜선택
   */
  const onDateSelct = result => {
    setSelectedScheduleArray(result);
  };

  /**
   *
   * @function 시간선택
   */
  const onSelectTime = times => {
    setSelectedTimes(times);
  };

  /**
   *
   * @function 날짜별-시간들 오브젝트로 변환
   * 부모 컴포넌트에 날짜 오브젝트 전달
   */
  const onScheduleObjChange = changedScheduleObject => {
    setSelectedScheduleObject(changedScheduleObject);
  };

  /**
   *
   * @function 예약시간날짜인덱스변경
   */
  const onDateIndexChange = index => setCurDateIndex(index);

  /**
   *
   * @function 강의소요시간입력
   * 날짜별 강의시간 관리
   */
  const onLectureTimeChange = lectureTime => {
    const copyObjs = { ...locations };
    const result = Object.assign(copyObjs, {
      [selectedScheduleArray[curDateIndex]]: {
        ...copyObjs[selectedScheduleArray[curDateIndex]],
        lectureTime,
      },
    });
    console.log("강의시간 변경됨? : ", result);
    setLocations(result);
  };

  /**
   *
   * @function 강의장소 선택
   * 날짜별 위치 위도경도
   */
  const onBtnLocation = ({ when }) => {
    const onLocationSelected = ({ picker }) => {
      const copyObjs = { ...locations };
      const result = Object.assign(copyObjs, {
        [when]: { ...copyObjs[when], ...picker },
      });
      setLocations(result);

      navigation.goBack();
    };

    navigation.navigate('LectureLocationAdd', {
      onLocationSelected,
    });
  };

  /**
   *
   * @function 강의장소 이름 지정
   * 날짜별 위치 이름
   */
  const onLocationNameChange = ({ when, name }) => {
    const copyObjs = { ...locations };
    const result = Object.assign(copyObjs, {
      [when]: { ...copyObjs[when], name },
    });
    setLocations(result);
  };

  /**
   *
   * @function 하단버튼 맵핑 함수들
   */
  const onPressLeft = () => {
    navigation.goBack();
  };
  const onPressRight = async () => {
    try {
      const detailReqList = [];
      selectedScheduleArray.forEach(date => {
        const lectureTime = makeTimeFormat({ minute: parseInt(locations[date].lectureTime, 10) });
        console.log("locations[date].lectureTime : ", locations[date].lectureTime);
        console.log("lectureTime : ", lectureTime);
        detailReqList.push({
          date,
          startTimes: selectedScheduleObject[date],
          lectureTime, // 강의 소요시간
          location: {
            latitude: locations[date].latitude,
            longitude: locations[date].longitude,
            address: locations[date].name, // 필드는 주소로 되어있는데, 주소 대신 장소이름을 사용할 것임.
          },
        });
      });

      console.log('max : ', max);
      const res = await axios.post(LectureAddScheduleAPI, {
        lectureId: route.params.id,
        period: selectedScheduleArray.length,
        maxNumber: max,
        detailReqList,
      });

      console.log('일정 추가 결과 : ', res);
      navigation.navigate('LectureScheduleAll');
    } catch (err) {
      console.log('일정 추가에 실패하였습니다. ', err);
    }
  };

  const func = {
    onDateSelct,
    onSelectTime,
    onScheduleObjChange,
    onLectureTimeChange,
    onDateIndexChange,
    onBtnLocation,
    onLocationNameChange,
    onPressLeft,
    onPressRight,
  };

  return (
    <LectureScheduleAddComponent
      func={func}
      selectedScheduleArray={selectedScheduleArray}
      max={max}
      setMax={setMax}
    />
  );
}
