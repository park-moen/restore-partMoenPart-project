import 'react-native-gesture-handler'; // navigator, production 시 필수.

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// redux
import initStore from '@lib/redux/store';

// import Screens
import SignUpContainer from '@cSignUp/SignUpContainer';
import LoginContainer from '@cLogin/LoginContainer';
import Loading from '@containers/Loading';
import Main from '@containers/Main';

import NewLectureContainer from '@cLectureCreate/NewLectureContainer';
import LectureFeeAndEquipments from '@cLectureCreate/LectureFeeAndEquipments';

import LectureListContainer from '@cStudent/LectureListContainer';
import LectureDetailContainer from '@cLectureDetail/LectureDetailContainer';

import LectureScheduleAll from '@cSchedule/LectureScheduleAll';
import LectureScheduleAdd from '@cSchedule/LectureScheduleAdd';
import LectureLocationAdd from '@cSchedule/LectureLocationAdd';
import NMapSearch from '@cSchedule/NMapSearch';
import CReservation from '@cReservation/CReservation';
import CEquipment from '@cReservation/CEquipment';

const store = initStore();
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
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="SignUp" component={SignUpContainer} />
      <Stack.Screen name="Main" component={Main} />

      <Stack.Screen
        name="NewLecture"
        component={NewLectureContainer}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LectureFeeAndEquipments"
        component={LectureFeeAndEquipments}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LectureList"
        component={LectureListContainer}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LectureDetail"
        component={LectureDetailContainer}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LectureScheduleAll"
        component={LectureScheduleAll}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LectureScheduleAdd"
        component={LectureScheduleAdd}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LectureLocationAdd"
        component={LectureLocationAdd}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="NMapSearch"
        component={NMapSearch}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Reservation"
        component={CReservation}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="CEquipment"
        component={CEquipment}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
