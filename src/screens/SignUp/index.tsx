import React, { ReactElement } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { SignUpProps } from '@navigators/LoginStack/types';

// import style
import { styles } from './styles';

// import components
import SignUp from '@components/SignUp';

export default function SignUpScreen({
  navigation,
  route,
}: SignUpProps): ReactElement {
  const onPress = () => navigation.navigate('Login');

  return (
    <SafeAreaView style={styles.container}>
      <SignUp onPress={onPress} text={`${route.params.testId}번 입니다.`} />
    </SafeAreaView>
  );
}
