import React from 'react';
import PEachDay from '@pReservation/PEachDay';

/**
 *
 * @component 구체적인 하루에 대한 컴포넌트
 */
export default function CEachDay({
  scheduleDetails,
  order,
  array,
  maxNumber,
  scheduleId,
}) {
  return (
    <PEachDay
      scheduleDetails={scheduleDetails}
      order={order}
      array={array}
      maxNumber={maxNumber}
      scheduleId={scheduleId}
    />
  );
}
