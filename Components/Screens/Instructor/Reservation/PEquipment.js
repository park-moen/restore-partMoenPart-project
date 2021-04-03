import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import ButtomButtons from '@cCommon/BottomButtons';
import { CEachEquipment } from '@cReservation/CEquipment';
import TextInputContainer from '@cCommon/TextInputContainer';

/**
 *
 * @component 단일장비 컴포넌트
 */
export function PEachEquipment({ name, price, isChecked, onCheckboxPress }) {
  return (
    <TouchableOpacity
      onPress={onCheckboxPress}
      style={[
        stylesEach.container,
        isChecked ? stylesEach.selectBg : stylesEach.unSelectBg,
      ]}
    >
      <CheckBox
        checked={isChecked}
        containerStyle={{ padding: 0 }}
        onPress={onCheckboxPress}
      />
      <View style={stylesEach.equipmentContainer}>
        <Text style={stylesEach.text}>{name}</Text>
        <Text style={stylesEach.text}>{`+ ₩${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
const stylesEach = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 7,
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
  selectBg: {
    backgroundColor: '#e1f5fe33',
    borderColor: '#03a9f4',
  },
  unSelectBg: {
    backgroundColor: '#fff',
    borderColor: '#e2e2e2',
  },
});

/**
 *
 * @component 대여장비 목록
 */
export default function PEquipment({
  lectureInfo,
  onPressLeft = () => {},
  onPressRight = () => {},
  onTextChange = () => {},
}) {
  const { equipmentList } = lectureInfo;
  if (equipmentList === undefined) return null;

  const array = [];
  equipmentList.forEach((element, i) => {
    const { name, price } = element;
    array.push(<CEachEquipment key={i} name={name} price={price} />);
  });

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.title}>장비 대여</Text>
        {array}
        <TextInputContainer
          title="전달사항"
          placeholder="예) 발사이즈 260"
          onTextChange={onTextChange}
        />
      </ScrollView>
      {/* 하단 버튼 */}
      <ButtomButtons
        TextLeft="이전"
        TextRight="등록 완료"
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
