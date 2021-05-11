import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Screens
import SignUpContainer from '@legacy_containers/Screens/SignUp/SignUpContainer';
import LoginContainer from '@legacy_containers/Screens/Login/LoginContainer';
import Loading from '@legacy_containers/Loading';
import Main from '@legacy_containers/Main';

import NewLectureContainer from '@legacy_containers/Screens/Instructor/LectureCreate/NewLectureContainer';
import LectureFeeAndEquipments from '@legacy_containers/Screens/Instructor/LectureCreate/LectureFeeAndEquipments';

import LectureListContainer from '@legacy_containers/Screens/Student/LectureListContainer';
import LectureDetailContainer from '@legacy_containers/Screens/Instructor/LectureDetail/LectureDetailContainer';

import LectureScheduleAll from '@legacy_containers/Screens/Instructor/Schedule/LectureScheduleAll';
import LectureScheduleAdd from '@legacy_containers/Screens/Instructor/Schedule/LectureScheduleAdd';
import LectureLocationAdd from '@legacy_containers/Screens/Instructor/Schedule/LectureLocationAdd';
import NMapSearch from '@legacy_containers/Screens/Instructor/Schedule/NMapSearch';
import CReservation from '@legacy_containers/Screens/Instructor/Reservation/CReservation';
import CEquipment from '@legacy_containers/Screens/Instructor/Reservation/CEquipment';
import StudentMyLecture from '@legacy_cScreens/Student/CMyLecture';

const Stack = createStackNavigator();

export default function LegacyStack() {
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
      <Stack.Screen
        name="StudentMyLecture"
        component={StudentMyLecture}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
