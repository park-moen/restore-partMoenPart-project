import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function SocialLogin() {
  return (
    <View style={styles.socialLoginContainer}>
      <Text style={styles.socialLoginText}>간편 시작</Text>
      <View style={styles.iconView}>
        <Image
          source={require('../../assets/kakao_logo.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>카카오로 로그인</Text>
      </View>
      <View style={styles.iconView}>
        <Image
          source={require('../../assets/naver_logo.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>네이버로 로그인</Text>
      </View>
      <View style={styles.iconView}>
        <Image
          source={require('../../assets/google_logo.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>구글로 로그인</Text>
      </View>
    </View>
  );
}
