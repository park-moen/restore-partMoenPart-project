import React, { useState } from 'react';

import PTimesComponent from 'Components/Screens/Instructor/Reservation/PTimesComponent';

/**
 *
 * @component 예약 시간별 컴포넌트
 */
export default function CTimesComponent({ times, maxNumber, gps, where }) {
  console.log('CTimesComponent :  ', times, maxNumber, gps, where);
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
}
