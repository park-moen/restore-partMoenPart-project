import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PTimesComponent from 'Components/Screens/Instructor/Reservation/PTimesComponent';
import { reservationSelect } from 'lib/redux/actions/reservationAction';

/**
 *
 * @component 예약 시간별 컴포넌트
 */
export default function CTimesComponent({
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

  const onDateSelect = label => {
    const time = label.label.split(' ')[0];
    console.log(time);

    dispatch(reservationSelect({ date, time }));
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
