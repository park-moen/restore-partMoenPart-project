import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default function HeaderText() {
  return (
    <>
      <Text style={styles.title}>나만의 다이빙 일정을 관리해보세요.</Text>
      <Text style={styles.explanation}>
        회원 정보가 없을 시, 회원가입 단계로 넘어갑니다
      </Text>
    </>
  );
}
