import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function LectureFeeAndEquipment({
  onPressLeft,
  onPressRight,
  TextLeft,
  TextRight,
}) {
  return (
    <View style={{ height: 50, borderWidth: 1, flexDirection: 'row' }}>
      <TouchableOpacity
        style={{
          flex: 1,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPressLeft}
      >
        <Text>{TextLeft}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPressRight}
      >
        <Text>{TextRight}</Text>
      </TouchableOpacity>
    </View>
  );
}
