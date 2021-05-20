import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

type IsValid = 'normal' | 'false' | 'true';

type InterpolationObj = {
  colorInterpolation: Animated.AnimatedInterpolation;
  backgroundColorInterpolation: Animated.AnimatedInterpolation;
};

const useTransitionColor = (): [
  IsValid,
  (param: IsValid) => void,
  InterpolationObj,
] => {
  const transitionColor = useRef(new Animated.Value(0)).current;

  const [isValid, setIsValid] = useState<IsValid>('normal');

  const backgroundColorInterpolation = transitionColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(254, 254, 254)', 'rgb(32, 122, 180)'],
  });
  const colorInterpolation = transitionColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(32, 122, 180)', 'rgb(254, 254, 254)'],
  });

  useEffect(() => {
    if (isValid === 'true') {
      Animated.timing(transitionColor, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(transitionColor, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isValid, transitionColor]);

  return [
    isValid,
    setIsValid,
    { colorInterpolation, backgroundColorInterpolation },
  ];
};

export default useTransitionColor;
