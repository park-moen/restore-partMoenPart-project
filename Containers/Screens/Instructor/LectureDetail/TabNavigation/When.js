import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { GetLectureScheduleAPI } from '@config/strings';
import PWhen, {
  PTimesComponent,
  PEachDay,
} from '@pLectureTabNav/PWhen';

/**
 *
 * @component 예약 시간별 컴포넌트
 */
export const CTimesComponent = ({ times, maxNumber, gps, where }) => {
  const [mapVisible, setMapVisible] = useState(false);

  const onMapExit = () => {
    setMapVisible(false);
  };

  const onMapView = () => {
    setMapVisible(true);
  };

  return (
    <PTimesComponent
      times={times}
      maxNumber={maxNumber}
      gps={gps}
      where={where}
      onMapExit={onMapExit}
      onMapView={onMapView}
      mapVisible={mapVisible}
    />
  );
};

/**
 *
 * @component 구체적인 하루에 대한 컴포넌트
 */
export const CEachDay = ({ scheduleDetails, order, array, maxNumber }) => {
  const [visible, setVisible] = useState(false);

  const onPressMore = () => {
    setVisible(!visible);
  };

  return (
    <PEachDay
      scheduleDetails={scheduleDetails}
      order={order}
      array={array}
      maxNumber={maxNumber}
      onPressMore={onPressMore}
      visible={visible}
    />
  );
};

/**
 *
 * @component 강의상세페이지 일정탭 컴포넌트
 */
export default function When({ lectureId }) {
  const [schedules, setSchedules] = useState([{}]); // 전체 일정 오브젝트 배열
  const [filteredSchedules, setFilteredSchedules] = useState([]);

  // 백엔드에서 일정 받아오기
  useEffect(() => {
    const fetch = async () => {
      if (lectureId !== undefined) {
        const response = await axios.get(GetLectureScheduleAPI, {
          params: { lectureId },
        });

        // eslint-disable-next-line no-shadow
        const { scheduleDtoList } = response.data._embedded;
        setSchedules(scheduleDtoList);
      }
    };

    if (lectureId !== undefined) fetch();
  }, [lectureId]);

  // 선택한 날짜와 관련된 일정만 추려냄
  const onDayPress = selectedDay => {
    const dayFilter = singleSchedule => {
      const { scheduleDetails } = singleSchedule; // 단일 일정 상세정보 (날짜별 오브젝트 배열)
      const filteredScheduleDetails = scheduleDetails.filter(singleDay => {
        return singleDay.date === selectedDay.dateString; // return T/F
      });

      return filteredScheduleDetails.length >= 1;
    };

    if (schedules) {
      // eslint-disable-next-line no-shadow
      const filteredSchedules = schedules.filter(dayFilter);
      setFilteredSchedules(filteredSchedules);
    }
  };

  return (
    <PWhen
      lectureId={lectureId}
      onDayPress={onDayPress}
      filteredSchedules={filteredSchedules}
    />
  );
}
