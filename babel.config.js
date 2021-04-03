/* eslint-disable no-dupe-keys */

const pathPlugin = [
  [
    'module-resolver',
    {
      root: ['./'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@': './',
        '@components': './Components',
        '@pCommon': './Components/common',
        '@pScreens': './Components/Screens',
        '@pInstructor': './Components/Instructor',
        '@pLectureCreate': './Components/Screens/Instructor/LectureCreate',
        '@pLectureDetail': './Components/Screens/Instructor/LectureDetail',
        '@pLectureTabNav':
          './Components/Screens/Instructor/LectureDetail/TabNavigation',
        '@pRegister': './Components/Screens/Instructor/Register',
        '@pReservation': './Components/Screens/Instructor/Reservation',
        '@pSchedule': './Components/Screens/Instructor/Schedule',
        '@pLogin': './Components/Screens/Login',
        '@pSignUp': './Components/Screens/SignUp',
        '@pStudent': './Components/Screens/Student',
        '@containers': './Containers',
        '@cCommon': './Containers/common',
        '@cScreens': './Containers/Screens',
        '@cInstructor': './Containers/Screens/Instructor',
        '@cLectureCreate': './Containers/Screens/Instructor/LectureCreate',
        '@cLectureDetail': './Containers/Screens/Instructor/LectureDetail',
        '@cLectureTabNav':
          './Containers/Screens/Instructor/LectureDetail/TabNavigation',
        '@cRegister': './Containers/Screens/Instructor/Register',
        '@cReservation': './Containers/Screens/Instructor/Reservation',
        '@cSchedule': './Containers/Screens/Instructor/Schedule',
        '@cLogin': './Containers/Screens/Login',
        '@cSignUp': './Containers/Screens/SignUp',
        '@cStudent': './Containers/Screens/Student',
        '@images': './images',
        '@config': './config',
        '@asset': './asset',
        '@lib': './lib',
        '@api': './lib/api',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...pathPlugin],
};
