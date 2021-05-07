import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const logoImage = require('@images/logo1.png');

// 로딩 스크린
function Loading({ navigation }) {
  // 1.5초 뒤에 Login 페이지로 전환
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  }, []);

  return (
    <Animatable.View
      animation="pulse"
      iterationCount="infinite"
      style={styles.logoContainer}
    >
      <Image source={logoImage} style={styles.image} />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Loading;
