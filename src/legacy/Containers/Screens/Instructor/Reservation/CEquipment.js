/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reservationAPI } from '@/src/legacy/lib/api/Lecture';

import PEquipment, { PEachEquipment } from '@legacy_pReservation/PEquipment';

import {
  equipmentSelect,
  equipmentInit,
  descriptionChange,
  descriptionInit,
} from '@/src/legacy/lib/redux/actions/reservationAction';

/**
 *
 * @component 단일장비 컴포넌트
 */
export function CEachEquipment({ name, price }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxPress = () => {
    const newChecked = !isChecked;
    dispatch(equipmentSelect({ equipment: name, isChecked: newChecked }));
    setIsChecked(newChecked);
  };

  return (
    <PEachEquipment
      name={name}
      price={price}
      isChecked={isChecked}
      onCheckboxPress={onCheckboxPress}
    />
  );
}

/**
 *
 * @component 대여장비 목록
 */
export default function CEquipment({ route, navigation }) {
  const dispatch = useDispatch();
  const { lectureInfo } = route.params;

  const {
    scheduleId,
    reservationDateList,
    equipmentList,
    description,
  } = useSelector(state => state.reservationReducer);

  const onPressLeft = () => {
    dispatch(equipmentInit());
    dispatch(descriptionInit());
    navigation.goBack();
  };

  const onPressRight = async () => {
    console.log(
      '신청하기 전에 확인 : ',
      scheduleId,
      reservationDateList,
      equipmentList,
      description,
    );

    const result = [];
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of Object.entries(reservationDateList)) {
      result.push(value);
    }
    console.log('날짜,시간 오브젝트->배열 변환 : ', result);

    await reservationAPI({
      scheduleId,
      equipmentList,
      description,
      reservationDateList: result,
      navigation,
    });
  };

  // eslint-disable-next-line no-shadow
  const onTextChange = description => {
    dispatch(descriptionChange({ description }));
  };

  return (
    <>
      <PEquipment
        lectureInfo={lectureInfo}
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
        onTextChange={onTextChange}
      />
    </>
  );
}
