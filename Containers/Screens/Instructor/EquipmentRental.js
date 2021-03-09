import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import TextInputContainer from '../../common/TextInputContainer';

const RenderEquipments = ({ equipmentList, setEquipmentList }) => {
  const array = [];

  for (let i = 0; i < equipmentList.length; i+=1) {
    const onEquipmentNameInput = input =>
      setEquipmentList(
        equipmentList
          .slice(0, i)
          .concat({ name: input, price: equipmentList[i].price })
          .concat(equipmentList.splice(i + 1, equipmentList.length)),
      );
    const onPriceInput = input =>
      setEquipmentList(
        equipmentList
          .slice(0, i)
          .concat({ name: equipmentList[i].name, price: input })
          .concat(equipmentList.splice(i + 1, equipmentList.length)),
      );

    array.push(
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#00bbf9',
          marginBottom: 10,
        }}
        key={i}
      >
        <TextInputContainer
          onTextChange={onEquipmentNameInput}
          title="장비대여"
          hideTitle
          placeholder="장비명을 입력하세요."
          style={styles.textInputContainer}
        />
        <TextInputContainer
          onTextChange={onPriceInput}
          title="장비대여"
          hideTitle
          placeholder="대여료를 입력하세요."
          style={styles.textInputContainer}
        />
      </View>,
    );
  }

  return array;
};

export default function EquipmentRental({ equipmentList, setEquipmentList }) {
  const initUser = { name: '', price: 0 };

  console.log('장비 개수 : ', equipmentList.length);
  console.log('장비 상태 : ', equipmentList);

  return (
    <View style={styles.container}>
      <Text
        style={{ height: 30, fontSize: 20, fontWeight: 'bold', paddingLeft: 5 }}
      >
        장비대여
      </Text>
      <RenderEquipments
        equipmentList={equipmentList}
        setEquipmentList={setEquipmentList}
      />

      {/* 버튼 */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => {
            setEquipmentList(equipmentList.concat(initUser));
          }}
        >
          <Entypo name="plus" style={styles.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => {
            setEquipmentList(equipmentList.slice(0, equipmentList.length - 1));
          }}
        >
          <Entypo name="minus" style={styles.buttonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#5DCACB',
  },
  textInputContainer: {
    flex: 1,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  buttonAdd: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#00bbf9',
    // 모달 그림자 설정
    ...Platform.select({
      ios: {
        shadowColor: 'black', // "#020A96",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonDelete: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#ff5d8f',
    // 모달 그림자 설정
    ...Platform.select({
      ios: {
        shadowColor: 'black', // "#020A96",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
