/* eslint-disable react/no-children-prop */
import React from 'react';

// Tab Navigatior
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Tab Screens
import What from '@cLectureDetail/TabNavigation/What';
import When from '@cLectureDetail/TabNavigation//When';
import With from '@cLectureDetail/TabNavigation//With';
// import Where from '@cLectureDetail/TabNavigation/Where';

const Tab = createMaterialTopTabNavigator();

export default function LectureDetailTabNav({ lectureInfo }) {
  console.log('내부 탭 네비임 lectureInfo : ', lectureInfo.id);
  return (
    <Tab.Navigator style={{ flex: 1 }}>
      <Tab.Screen
        name="강의소개"
        children={() => <What lectureInfo={lectureInfo} />}
      />
      <Tab.Screen
        name="일정"
        children={() => <When lectureId={lectureInfo.id} />}
      />
      {/* <Tab.Screen
        name="장소"
        children={() => <Where lectureInfo={lectureInfo} />}
      /> */}
      <Tab.Screen
        name="장비대여"
        // eslint-disable-next-line react/no-children-prop
        children={() => <With lectureInfo={lectureInfo} />}
      />
    </Tab.Navigator>
  );
}
