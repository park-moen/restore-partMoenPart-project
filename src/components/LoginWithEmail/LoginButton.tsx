import React from 'react';
import { Animated, Pressable, Text } from 'react-native';
import useTransitionColor from '@components/Login/useTransitionColor';
import styles from './styles';

export default function LoginWithEmail() {
  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);
  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'PwInput',
  });

  return (
    <TransitionPressable
      disabled={!isValid}
      style={[
        styles.transitionPressable,
        { backgroundColor: interpolations.backgroundColorInterpolation },
      ]}
    >
      <TransitionText
        style={[
          styles.transitionText,
          { color: interpolations.colorInterpolation },
        ]}
      >
        로그인하기
      </TransitionText>
    </TransitionPressable>
  );
}
