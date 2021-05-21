import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useRecoilState } from 'recoil';

import { isEmailValid, isPWValid, IsValid } from '@recoil/LoginStack';

type InterpolationObj = {
  colorInterpolation: Animated.AnimatedInterpolation;
  backgroundColorInterpolation: Animated.AnimatedInterpolation;
};

type useTransitionColorProps = {
  screen?: 'Login' | 'PwInput';
};

const useTransitionColor = ({
  screen = 'Login',
}: useTransitionColorProps): [
  IsValid,
  (param: IsValid) => void,
  InterpolationObj,
] => {
  const transitionColor = useRef(new Animated.Value(0)).current;

  const [isValid, setIsValid] = useRecoilState<IsValid>(
    screen === 'Login' ? isEmailValid : isPWValid,
  );

  const backgroundColorInterpolation = transitionColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(254, 254, 254)', 'rgb(32, 122, 180)'],
  });
  const colorInterpolation = transitionColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(32, 122, 180)', 'rgb(254, 254, 254)'],
  });

  useEffect(() => {
    // isValid에 따라 transitionColor의 값이 변화한다.
    const toValue = isValid ? 1 : 0;
    Animated.timing(transitionColor, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isValid, transitionColor]);

  return [
    isValid,
    setIsValid,
    { colorInterpolation, backgroundColorInterpolation },
  ];
};

export default useTransitionColor;
