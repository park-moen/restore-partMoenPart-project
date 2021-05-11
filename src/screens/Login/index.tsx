import React, { ReactElement } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { LoginProps } from '@navigators/LoginStack/types';

// import style
import { styles } from './styles';

// import components
import Login from '@components/Login';

export default function LoginScreen({ navigation }: LoginProps): ReactElement {
  const onPress = () => navigation.navigate('SignUp', { testId: 3 });

  return (
    <SafeAreaView style={styles.container}>
      <Login onPress={onPress} />
    </SafeAreaView>
  );
}
