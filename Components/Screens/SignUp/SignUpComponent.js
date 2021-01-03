import React, { useState } from 'react';

import SignUpContainer from '../../../Containers/Screens/SingUp/SignUpContainer'
import axios from 'axios';

import * as URL from '../../../config/strings';

export default function SignUpComponent({ navigation }) {

    //입력값, 버튼 상태 체크용도
    const [data, setData] = useState({
        //입력란
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        age: null,
        gender: '',
        roles: '',

        //아이콘 옵션
        chk_secure: true,

        chk_email: false,
        chk_pw: false,
        chk_name: false,
        chk_age: false,
        chk_gender: false,
        chk_role: false
    })

    //email 입력
    const textEmailChange = (email) => {
        setData({
            ...data,
            email: email,
            chk_email: email.length !== 0 ? true : false
        });
        console.log("email 입력값 : ", email);
    }

    //name 입력
    const textNameChange = (name) => {
        setData({
            ...data,
            name: name,
            chk_name: name.length !== 0 ? true : false
        });
        console.log("name 입력값 : ", name);
    }

    //age 입력
    const textAgeChange = (age) => {
        setData({
            ...data,
            age: age,
            chk_age: age.length !== 0 ? true : false
        });
        console.log("age 입력값 : ", age);
    }

    //role 입력
    const textRoleChange = (roles) => {
        setData({
            ...data,
            roles: roles,
            chk_role: roles.length !== 0 ? true : false
        });
        console.log("role 입력값 : ", roles);
    }

    //gender 입력
    const textGenderChange = (gender) => {
        setData({
            ...data,
            gender: gender,
            chk_gender: gender.length !== 0 ? true : false
        });
        console.log("gender 입력값 : ", gender);
    }

    //패스워드 입력값 다루기
    const textPasswordChange = (pw) => {
        setData({
            ...data,
            password: pw,
            chk_pw: pw.length !== 0 ? true : false
        })
        console.log("pw 입력값 : ", pw);
    }

    //패스워드 확인값 다루기
    const textConrifmPasswordChange = (chk_pw) => {
        setData({
            ...data,
            confirmPassword: chk_pw,
        })
        console.log("chk_pw 입력값 : ", chk_pw);
    }

    //패스워드 보일지 말지 결정하는 상태 업데이트 함수
    const updateChkSecure = () => {
        setData({
            ...data,
            chk_secure: !data.chk_secure
        })
    }

    const submitSingUP = () => {
        if (data.password !== data.confirmPassword)
            console.log("패스워드가 서로 일치하지 않습니다.");
        else if (data.chk_email && data.chk_pw && data.chk_name && data.chk_age && data.chk_gender && data.chk_role) {
            axios.post(URL.SignUp, {
                "email": data.email,
                "password": data.password,
                "userName": data.name,
                "age": data.age,
                "gender": data.gender,
                "roles": [data.roles],
            })
            .then((res) => {
                console.log(res);
                navigation.navigate('Login');
            })
            .catch((err) => console.log("회원가입 에러 : ", err))
        }
        else {
            console.log("가입 정보를 다 채워주세요.");

            console.log("data.chk_email ", data.chk_email);
            console.log("data.chk_pw ", data.chk_pw);
            console.log("data.chk_name ", data.chk_name);
            console.log("data.chk_age ", data.chk_age);
            console.log("data.chk_gender ", data.chk_gender);
            console.log("data.chk_role", data.chk_role);
        }
    }

    return (
        <SignUpContainer
            navigation={navigation}
            data={data}
            textEmailChange={textEmailChange}
            textNameChange={textNameChange}
            textAgeChange={textAgeChange}
            textGenderChange={textGenderChange}
            textRoleChange={textRoleChange}
            textPasswordChange={textPasswordChange}
            textConrifmPasswordChange={textConrifmPasswordChange}
            updateChkSecure={updateChkSecure}
            submitSingUP={submitSingUP}
        />
    )
}

