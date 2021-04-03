import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function IconButton({ name, size, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name} size={size} />
    </TouchableOpacity>
  );
}

export function IconTextButton({
  name,
  size,
  text,
  onPress,
  fontStyle = { fontSize: 16, fontWeight: '600' },
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons name={name} size={size} style={{ marginRight: -7 }} />
      <Text style={{ ...fontStyle }}>{text}</Text>
    </TouchableOpacity>
  );
}

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
