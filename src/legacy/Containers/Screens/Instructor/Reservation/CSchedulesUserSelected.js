import React from 'react';

import PSchedulesUserSelected from '@legacy_pReservation/PSchedulesUserSelected';

/**
 *
 * @component 유저가 선택한 날짜와 관련된 일정 출력
 */
export default function CSchedulesUserSelected({ schedules }) {
  return <PSchedulesUserSelected schedules={schedules} />;
}
