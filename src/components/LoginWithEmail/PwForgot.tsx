import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

const PwForgot = () => (
  <Pressable>
    <Text style={styles.underlineText}>비밀번호를 잊으셨나요?</Text>
  </Pressable>
);

export default PwForgot;
