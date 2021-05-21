import React from 'react';
import { Text, Pressable } from 'react-native';

import styles from './styles';

export default function LoginProblem() {
  return (
    <Pressable>
      <Text style={styles.underlineText}>로그인에 문제가 생겼나요?</Text>
    </Pressable>
  );
}
