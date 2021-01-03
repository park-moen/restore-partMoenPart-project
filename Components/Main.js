import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import PopAlert from '../Components/Common/PopAlert'

import * as AsyncStorage from '../lib/storage/AsyncStorage';
import axios from 'axios';
import * as URL from '../config/strings';

export default function Main({ navigation }) {
        //로그아웃 버튼 함수
        const btnLogout = async () => {
            // PopAlert(title = "로그아웃", message = "로그아웃 하시겠습니까?"); 
            const accessToken = await AsyncStorage.getData("accessToken");
            const refreshToken = await AsyncStorage.getData("refreshToken");
            console.log("access token : ", accessToken);
            console.log("refresh token : ", refreshToken);
    
            axios.post(URL.Logout, {
                "accessToken": accessToken,
                "refreshToken": refreshToken
            }, {
                headers: {
                    'IsRefreshToken': false
                }
            }).then((res) => {
                console.log("logout response : ", res);
                AsyncStorage.removeValue("accessToen");
                AsyncStorage.removeValue("refreshToken");
                navigation.navigate('Login');
            }).catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("수신에러", error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log("요청에러", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log("환경", error.config);
            })
        }
    
        const btnRefreshToken = async () => {
            const refreshToken = await AsyncStorage.getData("refreshToken")
            console.log(refreshToken);
    
            axios.get(URL.TokenRefresh, {
                headers: {
                    'Authorization': refreshToken,
                    'IsRefreshToken': true
                }
            }).then(async (res) => {
                console.log("Refresh Toekn Response : ", res);
    
                const accessToken = res.data.accessToken;
                const refreshToken = res.data.refreshToken;
                await AsyncStorage.storeData("accessToken", accessToken);
                await AsyncStorage.storeData("refreshToken", refreshToken);
    
                axios.defaults.headers.common['Authorization'] = accessToken;
                console.log("axios 헤더의 Authorization은 현재 :", axios.defaults.headers.common['Authorization']);
            }).catch((err) => {
                console.log("Refresh Token Error : ", err);
            })
        }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF' }}>
            <Button title="로그아웃" onPress={ btnLogout } />
            <Button title="토큰 재발급" onPress={ btnRefreshToken } />
        </SafeAreaView>
    );
}