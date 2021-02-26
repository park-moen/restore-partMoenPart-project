import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export function TextInputStatic({
  title = 'test',
  hideTitle = false,
  text = 'test',
  style = {},
  onPress = () => {},
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ ...style }}>
        {/* 타이틀 */}
        {title == null || hideTitle ? null : (
          <Text style={styles.titleText}>{title}</Text>
        )}
        <View style={styles.staticTextContainer}>
          <Text style={{ color: 'grey' }}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function TextInputContainer({
  // input,
  onTextChange = () => {},
  title = 'test',
  hideTitle = false,
  placeholder = 'test',
  style = {},
  multiline = false,
  hideCheckMark = 'true',
}) {
  const [input, setInput] = useState('');

  return (
    <View style={{ ...style }}>
      {/* 타이틀 */}
      {title == null || hideTitle ? null : (
        <Text style={styles.titleText}>{title}</Text>
      )}
      <View style={styles.textContainer}>
        <TextInput
          style={multiline ? styles.textMultiline : styles.textOneline}
          placeholder={placeholder}
          autoCapitalize="none"
          multiline={multiline}
          value={input}
          onChangeText={text => {
            console.log('text : ', text);
            setInput(text); // 내부 상태값 갱신
            onTextChange(text); // 부모 컴포넌트에도 전달
          }}
        />
        {/* 입력값이 있을 경우에만 체크 마크 띄우도록 */}
        {input && hideCheckMark === 'true' ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="#000" size={25} />
          </Animatable.View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  staticTextContainer: {
    height: 50,
    padding: 10,
    borderColor: '#5DCACB', // 'gray', //lightgray
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    // backgroundColor: '#4CB1F755',
    borderColor: '#5DCACB', // 'gray', //lightgray
    borderWidth: 2,
    alignItems: 'center',
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  titleText: {
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  textOneline: {
    height: 45,
    padding: 10,
    flex: 1,
  },
  textMultiline: {
    height: 300,
    padding: 10,
    flex: 1,
    paddingTop: 10,
  },
});
