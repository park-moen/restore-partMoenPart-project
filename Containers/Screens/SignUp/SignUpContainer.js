import React, { useState } from 'react';
import axios from 'axios';

import SignUpComponent from '../../../Components/Screens/SingUp/SignUpComponent';
import * as URL from '../../../config/strings';

export default function SignUpContainer({ navigation }) {
  // 입력값, 버튼 상태 체크용도
  const [data, setData] = useState({
    // 입력란
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    age: null,
    gender: '',

    // 아이콘 옵션
    chk_secure: true,

    chk_email: false,
    chk_pw: false,
    chk_name: false,
    chk_age: false,
    chk_gender: false,
  });

  // email 입력
  const textEmailChange = email => {
    setData({
      ...data,
      email,
      chk_email: email.length !== 0,
    });
    console.log('email 입력값 : ', email);
  };

  // name 입력
  const textNameChange = name => {
    setData({
      ...data,
      name,
      chk_name: name.length !== 0,
    });
    console.log('name 입력값 : ', name);
  };

  // age 입력
  const textAgeChange = age => {
    setData({
      ...data,
      age,
      chk_age: age.length !== 0,
    });
    console.log('age 입력값 : ', age);
  };

  // gender 입력
  const textGenderChange = gender => {
    setData({
      ...data,
      gender,
      chk_gender: gender.length !== 0,
    });
    console.log('gender 입력값 : ', gender);
  };

  // 패스워드 입력값 다루기
  const textPasswordChange = pw => {
    setData({
      ...data,
      password: pw,
      chk_pw: pw.length !== 0,
    });
    console.log('pw 입력값 : ', pw);
  };

  // 패스워드 확인값 다루기
  const textConrifmPasswordChange = chk_pw => {
    setData({
      ...data,
      confirmPassword: chk_pw,
    });
    console.log('chk_pw 입력값 : ', chk_pw);
  };

  // 패스워드 보일지 말지 결정하는 상태 업데이트 함수
  const updateChkSecure = () => {
    setData({
      ...data,
      chk_secure: !data.chk_secure,
    });
  };

  const submitSingUP = () => {
    if (data.password !== data.confirmPassword)
      console.log('패스워드가 서로 일치하지 않습니다.');
    else if (
      data.chk_email &&
      data.chk_pw &&
      data.chk_name &&
      data.chk_age &&
      data.chk_gender
    ) {
      console.log(
        data.email,
        data.password,
        data.userName,
        data.age,
        data.gender,
      );
      axios
        .post(URL.SignUp, {
          email: data.email,
          password: data.password,
          userName: data.name,
          age: data.age,
          gender: data.gender,
        })
        .then(res => {
          console.log(res);
          navigation.navigate('Login');
        })
        .catch(err => console.log('회원가입 에러 : ', err.message));
    } else {
      console.log('가입 정보를 다 채워주세요.');

      console.log('data.chk_email ', data.chk_email);
      console.log('data.chk_pw ', data.chk_pw);
      console.log('data.chk_name ', data.chk_name);
      console.log('data.chk_age ', data.chk_age);
      console.log('data.chk_gender ', data.chk_gender);
    }
  };

  return (
    <SignUpComponent
      navigation={navigation}
      data={data}
      textEmailChange={textEmailChange}
      textNameChange={textNameChange}
      textAgeChange={textAgeChange}
      textGenderChange={textGenderChange}
      textPasswordChange={textPasswordChange}
      textConrifmPasswordChange={textConrifmPasswordChange}
      updateChkSecure={updateChkSecure}
      submitSingUP={submitSingUP}
    />
  );
}
