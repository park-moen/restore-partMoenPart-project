import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PTimesComponent from '@pReservation/PTimesComponent';
import { reservationSelect } from '@lib/redux/actions/reservationAction';

/**
 *
 * @component 예약 시간별 컴포넌트
 */
export default function CTimesComponent({
  scheduleDetailId,
  times,
  maxNumber,
  gps,
  where,
  date,
}) {
  const dispatch = useDispatch();

  const [mapVisible, setMapVisible] = useState(false);

  const onMapExit = () => {
    setMapVisible(false);
  };

  const onMapView = () => {
    setMapVisible(true);
  };

  const onDateSelect = selectedTime => {
    const { scheduleTimeId } = selectedTime;
    const time = selectedTime.label.split(' ')[0];
    // console.log('시간을 선택했다', time);

    dispatch(
      reservationSelect({ date, time, scheduleDetailId, scheduleTimeId }),
    );
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
      onDateSelect={onDateSelect}
    />
  );
}
