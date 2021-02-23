import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import PopAlert from '../Components/Common/PopAlert';

import { Logout, RefreshToken } from '../lib/api/TokenActivity';

export default function Main({ navigation }) {
  const btnLogout = () => {
    Logout({ navigation: navigation });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF' }}
    >
      <Button title="로그아웃" onPress={btnLogout} />
      <Button title="토큰 재발급" onPress={RefreshToken} />
    </SafeAreaView>
  );
}
