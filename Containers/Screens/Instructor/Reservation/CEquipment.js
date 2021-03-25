import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

/**
 *
 * @component 단일장비 컴포넌트
 */
export function CEachEquipment({ name, price }) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={stylesEach.container}>
      <CheckBox checked={isChecked} containerStyle={{ padding: 0 }} />
      <TouchableOpacity
        style={stylesEach.equipmentContainer}
        onPress={onCheckboxPress}
      >
        <Text style={stylesEach.text}>{name}</Text>
        <Text style={stylesEach.text}>{`+ ₩${price}`}</Text>
      </TouchableOpacity>
    </View>
  );
}
const stylesEach = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  equipmentContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'space-between',
    backgroundColor: '#9DE8FF',
  },
  text: {
    padding: 7,
    fontSize: 18,
    fontWeight: '500',
  },
});

/**
 *
 * @component 대여장비 목록
 */
export default function CEquipment({ lectureInfo }) {
  const { equipmentList } = lectureInfo;

  if (equipmentList === undefined) return null;

  const array = [];
  equipmentList.forEach((element, i) => {
    const { name, price } = element;
    array.push(<CEachEquipment key={i} name={name} price={price} />);
  });

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>장비 대여</Text>
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
});
