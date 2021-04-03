import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  reservationInit,
  scheduleIdInit,
} from '@lib/redux/actions/reservationAction';
import { GetLectureScheduleAPI } from '@config/strings';
import PReservationCalendar from '@pReservation/PReservationCalendar';

/**
 *
 * @component 강의상세페이지 일정탭 컴포넌트
 */
export default function CReservationCalendar({ lectureId }) {
  const dispatch = useDispatch();
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
    dispatch(reservationInit());
    dispatch(scheduleIdInit());

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
    <PReservationCalendar
      lectureId={lectureId}
      onDayPress={onDayPress}
      filteredSchedules={filteredSchedules}
    />
  );
}
