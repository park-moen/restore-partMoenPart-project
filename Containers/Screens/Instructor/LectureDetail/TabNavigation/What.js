import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Avatar } from 'react-native-paper';

import TagList from '@pCommon/Tags';

const sampleProfile = require('@asset/person.jpeg');

/**
 * 강사 프로필 간략 소개
 */
const InstructorInfo = ({ instructorId }) => {
  return (
    <View style={styles1.container}>
      <Avatar.Image size={90} source={sampleProfile} />
      <View style={styles1.infoContainer}>
        <Text style={styles1.name}>김동자</Text>
        <TagList tags={['AIDA', '평점 4.7', '1000명']} />
        <Text style={styles1.bodyText}>돈을 많이 벌고싶다.</Text>
      </View>
    </View>
  );
};
const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  infoContainer: {
    padding: 5,
    marginLeft: 5,
  },
  name: { fontSize: 23, padding: 5 },
  bodyText: { fontSize: 15, padding: 5 },
});

/**
 *
 * @screen 강의소개
 */
export default function What({ lectureInfo }) {
  // // console.log('schedules : ', lectureInfo);
  return (
    <View style={styles2.rootContainer}>
      <InstructorInfo instructorId={lectureInfo.instructorId} />
      <Text style={styles2.contentTitle}>강의내용</Text>
      <View style={styles2.contentContainer}>
        <Text style={styles2.description}>{lectureInfo.description}</Text>
      </View>
    </View>
  );
}
const styles2 = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
    paddingBottom: 800,
  },
  contentTitle: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contentContainer: {
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 8,
  },
  description: {
    padding: 3,
    fontSize: 18,
    lineHeight: 23,
  },
});
