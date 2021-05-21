import React from 'react';
import { View } from 'react-native';
import { LoginWithEmailProps } from '@navigators/LoginStack/types';
import { PwForgot, LoginButton, PWInput } from '@components/LoginWithEmail';
import styles from './styles';

const LoginWithEmailScreen = ({ navigation }: LoginWithEmailProps) => {
  return (
    <View style={styles.container}>
      <PWInput />
      <LoginButton />
      <PwForgot />
    </View>
  );
};
export default LoginWithEmailScreen;
