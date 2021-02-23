import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function InputEmail({ data, textInputChange }) {
  return (
    <>
      {/* 이메일 입력란 */}
      <Text style={styles.sectionName}>이메일</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user-o" color="#000" size={20} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Email"
          autoCapitalize="none"
          onChangeText={email => textInputChange(email)} //입력값이 email state에 반영됨.
        />

        {/* 입력값이 있을 경우에만 체크 마크 띄우도록 */}
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#000" size={20} />
          </Animatable.View>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionName: {
    color: '#000',
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#000',
  },
});
