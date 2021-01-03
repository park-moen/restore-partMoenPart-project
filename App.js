import 'react-native-gesture-handler'; //navigator, production 시 필수.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Screens
import SignUpComponent from './Components/Screens/SignUp/SignUpComponent';
import LoginComponent from './Components/Screens/Login/LoginComponent';
import Loading from './Components/Loading';
import Main from './Components/Main';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    // 화면 전환 시 fade 옵션 적용
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
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
        }),
      }}
      mode="modal"
    >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Login" component={LoginComponent} />
      <Stack.Screen name="SignUp" component={SignUpComponent} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
