import React, { useState } from 'react';
import { Button } from 'react-native';

import LoginComponent from 'Components/Screens/Login/LoginComponent';

import { Login } from '../../../lib/api/TokenActivity';
import { getLectureSchedule } from '../../../lib/api/Lecture';

export default function LoginContainer({ navigation }) {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  // 이메일 입력 함수
  const textInputChange = email => {
    if (email.length !== 0) {
      setData({
        ...data,
        email,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email,
        check_textInputChange: false,
      });
    }
    // // console.log('[바뀐 이메일은 이거다 : ', email, ']');
  };

  // 패스워드 입력 함수
  const handlePasswordChange = pw => {
    setData({
      ...data,
      password: pw,
    });
    // // console.log('[바뀐 패스워드는 이거다 : ', pw, ']');
  };

  // 패스워드 보일지 말지 결정하는 상태 업데이트 함수
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // 회원가입 버튼 함수
  const btnSignup = () => {
    navigation.navigate('SignUp');
  };

  const btnLogin = async () => {
    // const success = await Login({email:data.email, password:data.password});
    // // // console.log("로그인 성공 여부 : ",success);
    // if(success){
    //     navigation.navigate('Main');
    // }
    Login({
      email: data.email,
      password: data.password,
      navigation,
    });
  };

  return (
    <>
      <LoginComponent
        navigation={navigation}
        data={data}
        textInputChange={textInputChange}
        handlePasswordChange={handlePasswordChange}
        updateSecureTextEntry={updateSecureTextEntry}
        btnLogin={btnLogin}
        btnSignup={btnSignup}
      />
      <Button
        title="스케줄 얻기"
        onPress={async () => {
          const result = await getLectureSchedule({ lectureId: 2 });
          // console.log('result : ', result);
          // console.log('schedules : ', result.data._embedded.scheduleDtoList);
          console.log(
            'scheduleDetail : ',
            result.data._embedded.scheduleDtoList[0].scheduleDetails,
          );
          console.log(
            'single scheduel time list : ',
            result.data._embedded.scheduleDtoList[0].scheduleDetails[0]
              .scheduleTimeDtoList,
          );
        }}
      />
    </>
  );
}
