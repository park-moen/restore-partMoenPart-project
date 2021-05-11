import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PEachSchedule from '@legacy_pReservation/PEachSchedule';
import { setScheduleId } from '@/src/legacy/lib/redux/actions/reservationAction';

export default function CEachSchedule({ singleSchedule }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { scheduleId } = singleSchedule;

  useEffect(() => {
    setVisible(false);
    console.log('singleSchedule : ', singleSchedule);
  }, [singleSchedule]);

  const onPressMore = () => {
    dispatch(setScheduleId({ scheduleId }));
  };

  return (
    <PEachSchedule
      singleSchedule={singleSchedule}
      onPressMore={onPressMore}
      visible={visible}
      scheduleId={scheduleId}
    />
  );
}
