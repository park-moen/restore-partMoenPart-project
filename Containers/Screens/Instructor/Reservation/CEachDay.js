import React, { useState } from 'react';
import PEachDay from 'Components/Screens/Instructor/Reservation/PEachDay';

/**
 *
 * @component 구체적인 하루에 대한 컴포넌트
 */
export default function CEachDay({
  scheduleDetails,
  order,
  array,
  maxNumber,
  visible,
}) {
  return (
    <PEachDay
      scheduleDetails={scheduleDetails}
      order={order}
      array={array}
      maxNumber={maxNumber}
      visible={visible}
    />
  );
}
