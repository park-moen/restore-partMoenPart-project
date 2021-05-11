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
        '@legacy_components': './src/legacy/Components',
        '@legacy_pCommon': './src/legacy/Components/common',
        '@legacy_pScreens': './src/legacy/Components/Screens',
        '@legacy_pInstructor': './src/legacy/Components/Instructor',
        '@legacy_pLectureCreate':
          './src/legacy/Components/Screens/Instructor/LectureCreate',
        '@legacy_pLectureDetail':
          './src/legacy/Components/Screens/Instructor/LectureDetail',
        '@legacy_pLectureTabNav':
          './src/legacy/Components/Screens/Instructor/LectureDetail/TabNavigation',
        '@legacy_pRegister':
          './src/legacy/Components/Screens/Instructor/Register',
        '@legacy_pReservation':
          './src/legacy/Components/Screens/Instructor/Reservation',
        '@legacy_pSchedule':
          './src/legacy/Components/Screens/Instructor/Schedule',
        '@legacy_pLogin': './src/legacy/Components/Screens/Login',
        '@legacy_pSignUp': './src/legacy/Components/Screens/SignUp',
        '@legacy_pStudent': './src/legacy/Components/Screens/Student',
        '@legacy_containers': './src/legacy/Containers',
        '@legacy_cCommon': './src/legacy/Containers/common',
        '@legacy_cScreens': './src/legacy/Containers/Screens',
        '@legacy_cInstructor': './src/legacy/Containers/Screens/Instructor',
        '@legacy_cLectureCreate':
          './src/legacy/Containers/Screens/Instructor/LectureCreate',
        '@legacy_cLectureDetail':
          './src/legacy/Containers/Screens/Instructor/LectureDetail',
        '@legacy_cLectureTabNav':
          './src/legacy/Containers/Screens/Instructor/LectureDetail/TabNavigation',
        '@legacy_cRegister':
          './src/legacy/Containers/Screens/Instructor/Register',
        '@legacy_cReservation':
          './src/legacy/Containers/Screens/Instructor/Reservation',
        '@legacy_cSchedule':
          './src/legacy/Containers/Screens/Instructor/Schedule',
        '@legacy_cLogin': './src/legacy/Containers/Screens/Login',
        '@legacy_cSignUp': './src/legacy/Containers/Screens/SignUp',
        '@legacy_cStudent': './src/legacy/Containers/Screens/Student',

        '@legacy_navigators': './src/legacy/navigators',
        '@legacy_config': './src/legacy/config',
        '@legacy_lib': './src/legacy/lib',
        '@legacy_api': './src/legacy/lib/api',
        '@legacy_redux': './src/legacy/lib/redux',
        '@legacy_hooks': './src/legacy/lib/hooks',

        '@assets': './src/assets',
        '@components': './src/components',
        '@config': './src/config',
        '@navigators': './src/navigators',
        '@recoil': './src/recoil',
        '@screens': './src/screens',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...pathPlugin],
};
