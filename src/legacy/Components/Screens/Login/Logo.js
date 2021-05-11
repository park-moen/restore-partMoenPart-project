import React from 'react';

import { Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const logoImage = require('@assets/logo1.png');

export default function Logo() {
  return (
    <Animatable.View
      animation="fadeInDown"
      direction="alternate"
      style={styles.LogoContainer}
    >
      <Image style={styles.LogoSize} source={logoImage} />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  LogoContainer: {
    alignItems: 'center',
    padding: 30,
    flex: 2,
    justifyContent: 'flex-end',
  },
  LogoSize: {
    width: 100,
    height: 100,
  },
});
