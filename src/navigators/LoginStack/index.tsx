import React from 'react';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { fadeEffectProp, RootLoginStack } from './types';

// import Screens
import LoginScreen from '@screens/Login';
import SignUpScreen from '@screens/SignUp';

const Stack = createStackNavigator<RootLoginStack>();

export default function LoginStack() {
  const fadeEffect = ({ current: { progress } }: fadeEffectProp) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  });

  return (
    <RecoilRoot>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: fadeEffect,
        }}
        mode="modal"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </RecoilRoot>
  );
}
