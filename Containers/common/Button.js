import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({
  text = '테스트',
  onPress = () => {},
  buttonColor = 'black',
  textColor = 'white',
  buttonStyle = {},
  fontStyle = {},
}) {
  return (
    <TouchableOpacity
      style={{
        ...styels.buttonContainer,
        backgroundColor: buttonColor,
        ...buttonStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ ...styels.text, color: textColor, ...fontStyle }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styels = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    margin: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
