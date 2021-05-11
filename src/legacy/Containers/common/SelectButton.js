import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ModalComponent from '@legacy_components/common/ModalComponent';

export default function SelectButton({
  placeholder = '골라골라',
  title,
  hideTitle = false,
  data = ['test'],
  choice,
  setChoice,
  style = {},
}) {
  const [visible, setVisible] = useState(false);

  return (
    <View
      style={
        title == null ? { height: 45, ...style } : { height: 75, ...style }
      }
    >
      {/* 타이틀 */}
      {title == null || hideTitle ? null : (
        <Text style={styles.title}>{title}</Text>
      )}

      {/* 모달 여닫는 버튼 */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setVisible(!visible)}
      >
        <Text
          style={
            choice === ''
              ? { ...styles.buttonText, color: 'gray', opacity: 0.5 }
              : styles.buttonText
          }
        >
          {choice === '' ? placeholder : choice}
        </Text>
        <View style={styles.arrowIcon}>
          {visible ? (
            <AntDesign name="caretup" size={20} color="grey" />
          ) : (
            <AntDesign name="caretdown" size={20} color="grey" />
          )}
        </View>
      </TouchableOpacity>

      {/* 모달 */}
      <ModalComponent
        data={data}
        visible={visible}
        title={title}
        hideTitle={hideTitle}
        setVisible={setVisible}
        choice={choice}
        setChoice={setChoice}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    borderColor: '#0E85FB',
    // borderWidth:2,
    backgroundColor: '#CDE8E8', // lightgray, lightsteelblue, powderblue
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    // opacity:0.3
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 17,
    color: 'black',
  },
  arrowIcon: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
});
