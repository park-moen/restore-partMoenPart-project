import React, { ReactElement } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CMyLectureSingle from '@cStudent/CMyLectureSingle';
import { useMyList } from '@hooks/useMyList';

type Props = {
  name: string;
};

export default function PMyLecture({ name }: Props): ReactElement {
  const myList = useMyList();
  console.log('MyList 훅으로 가져오기', myList);

  const myLectureList: ReactElement[] = [];
  myList.forEach((lectureInfo, i) => {
    myLectureList.push(<CMyLectureSingle key={i} lectureInfo={lectureInfo} />);
  });

  return <ScrollView style={styles.container}>{myLectureList}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
