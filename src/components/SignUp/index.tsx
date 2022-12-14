import React, { ReactElement } from 'react';
import { View, Text, Button } from 'react-native';
import { useRecoilState } from 'recoil';
import { SignUpProp } from './types';

import { styles } from './styles';

import { countState } from '@recoil/LoginStack';

export default function Login({ onPress, text }: SignUpProp): ReactElement {
  const [count, setCount] = useRecoilState(countState);
  const onCountPress = () => setCount(count + 1);
  return (
    <View style={styles.container}>
      <Text>bye</Text>
      <Text>{text}</Text>
      <Text>{`Recoil CountState : ${count}`}</Text>
      <Button title="Add Count" onPress={onCountPress} />
      <Button title="navigate" onPress={onPress} />
    </View>
  );
}
