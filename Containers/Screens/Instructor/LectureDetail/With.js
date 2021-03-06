import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

/**
 *
 * @component 대여장비 목록
 */
export default function With({ lectureInfo }) {
  const equipmentList = lectureInfo.equipmentList;

  if (equipmentList === undefined) return null;

  const array = [];
  equipmentList.forEach((element, i) => {
    array.push(
      <View key={i} style={styles.equipmentContainer}>
        <Text style={styles.text}>{element.name}</Text>
        <Text style={styles.text}>{`₩${element.price}`}</Text>
      </View>,
    );
  });

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>대여장비 목록</Text>
      {array}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  equipmentContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
  },
  text: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});
