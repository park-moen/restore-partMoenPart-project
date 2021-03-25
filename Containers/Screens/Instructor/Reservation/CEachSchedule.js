import React, { useState, useEffect } from 'react';
import PEachSchedule from 'Components/Screens/Instructor/Reservation/PEachSchedule';

export default function CEachSchedule({ singleSchedule }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [singleSchedule]);

  const onPressMore = () => {
    setVisible(!visible);
  };

  return (
    <PEachSchedule
      singleSchedule={singleSchedule}
      onPressMore={onPressMore}
      visible={visible}
    />
  );
}
