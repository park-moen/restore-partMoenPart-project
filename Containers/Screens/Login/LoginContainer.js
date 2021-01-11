import React, { useState } from 'react';

import LoginComponent from '../../../Components/Screens/Login/LoginComponent';
import axios from 'axios';

import * as URL from '../../../config/strings';
import * as AsyncStorage from '../../../lib/storage/AsyncStorage';

export default function LoginContainer({ navigation }) {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    //이메일 입력 함수
    const textInputChange = (email) => {
        if (email.length !== 0) {
            setData({
                ...data,
                email: email,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: email,
                check_textInputChange: false
            })
        }
        console.log("[바뀐 이메일은 이거다 : ", email, "]")
    }

    //패스워드 입력 함수
    const handlePasswordChange = (pw) => {
        setData({
            ...data,
            password: pw,
        })
        console.log("[바뀐 패스워드는 이거다 : ", pw, "]")
    }

    //패스워드 보일지 말지 결정하는 상태 업데이트 함수
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    //로그인 버튼 함수
    const btnLogin = () => {
        axios.post(URL.Login, {
            email: data.email,
            password: data.password
        }
        ).then(
            async (response) => {
                //로그인 여부 저장
                await AsyncStorage.storeData("isLogged", "YES");
                console.log("AsyncStorage isLogged 저장 완료");

                // 모든 HTTP 요청 헤더에 Authorization 값 설정
                console.log("Response : ", response);

                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;
                AsyncStorage.storeData("accessToken", accessToken);
                AsyncStorage.storeData("refreshToken", refreshToken);

                //axios 설정값은 앱껏다키면 날아감
                axios.defaults.headers.common['Authorization'] = accessToken;
                console.log("axios 헤더의 Authorization은 현재 :", axios.defaults.headers.common['Authorization']);
                // axios.defaults.headers.common['Cookie'] = `; email=${data.email}`

                //로그인 완료. 메인 화면으로 이동.
                navigation.navigate('Main');
            }
        ).catch((err) => console.log("로그인 에러 : ", err))
    }

    //회원가입 버튼 함수
    const btnSignup = () => {
        navigation.navigate('SignUp');
    }

    return (
        <LoginComponent
            navigation={navigation}
            data={data}
            textInputChange={textInputChange}
            handlePasswordChange={handlePasswordChange}
            updateSecureTextEntry={updateSecureTextEntry}
            btnLogin={btnLogin}
            btnSignup={btnSignup}
        />
    );
}