import React from 'react';

import CEachSchedule from '@cReservation/CEachSchedule';

/**
 *
 * @component 유저가 선택한 날짜와 관련된 일정 출력
 */
export default function PSchedulesUserSelected({ schedules }) {
  const result = [];
  schedules.forEach((singleSchedule, i) => {
    result.push(
      // 단일 일정에 대한 컨테이너
      <CEachSchedule
        // eslint-disable-next-line react/no-array-index-key
        key={`singleSchedule${i}`}
        singleSchedule={singleSchedule}
      />,
    );
  });

  return result;
}
