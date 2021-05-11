import React, { useEffect, useState } from 'react';
import { LectureListAPIFunc } from 'lib/api/Lecture';

import PLectureList, {
  PCardLecture,
} from 'Components/Screens/Student/PLectureList';

export const CCardLecture = ({ lecture, onPressLecture }) => {
  const [heart, setHeart] = useState(false);
  const onPressHeart = () => {
    setHeart(!heart);
  };

  return (
    <PCardLecture
      lecture={lecture}
      onPressLecture={onPressLecture}
      heart={heart}
      onPressHeart={onPressHeart}
    />
  );
};

export default function LectureListContainer({ route, navigation }) {
  const [searchText, setSearchText] = useState('');
  const [lectures, setLectures] = useState([]);
  const [filter, setFilter] = useState({
    region: '',
    costCondition: {}, // { max: 0, min: 0 }형식
    certificateKind: '',
    groupName: '',
  });
  const [modalVisible, setModalVisible] = useState(false);

  // 화면 첫 진입 시 초기값.
  useEffect(() => {
    const { region, costCondition, certificateKind, groupName } = route.params;

    updateFilter({
      region,
      costCondition,
      certificateKind,
      groupName,
    });
  }, []);

  // 필터 변동 시마다 리렌더링
  useEffect(() => {
    async function getLectures() {
      console.log('API 보내기 전에 확인 ', filter);
      const { region, costCondition, certificateKind, groupName } = filter;
      const lectureByRegionResList = await LectureListAPIFunc({
        region,
        costCondition,
        certificateKind,
        groupName,
        page: 0,
        size: 5,
      });

      setLectures(lectureByRegionResList);
    }
    getLectures();
  }, [filter]);

  const updateFilter = ({
    region,
    costCondition,
    certificateKind,
    groupName,
  }) => {
    setFilter({ ...filter, region, costCondition, certificateKind, groupName });
  };

  const onSearchInput = input => {
    setSearchText(input);
    console.log('input : ', input);
  };

  const onPressLecture = ({ id }) => {
    console.log('id : ', id);
    navigation.navigate('LectureDetail', { id });
  };

  const modalClose = () => {
    setModalVisible(false);
  };

  const modalOpen = () => {
    setModalVisible(true);
  };

  return (
    <PLectureList
      lectures={lectures}
      searchText={searchText}
      onSearchInput={onSearchInput}
      onPressLecture={onPressLecture}
      modalOpen={modalOpen}
      modalClose={modalClose}
      modalVisible={modalVisible}
      updateFilter={updateFilter}
    />
  );
}
