import axios from 'axios';
import * as AsyncStorage from '../storage/AsyncStorage';

import * as URL from 'config/strings';

// 로그인 함수
export async function Login({ email, password, navigation }) {
  axios
    .post(URL.Login, {
      email,
      password,
    })
    .then(async response => {
      // 로그인 여부 저장
      await AsyncStorage.storeData('isLogged', 'YES');
      // // console.log('AsyncStorage isLogged 저장 완료');

      // 모든 HTTP 요청 헤더에 Authorization 값 설정
      // // console.log('Response : ', response);

      const { accessToken } = response.data;
      const { refreshToken } = response.data;
      AsyncStorage.storeData('accessToken', accessToken);
      AsyncStorage.storeData('refreshToken', refreshToken);

      // axios 설정값은 앱껏다키면 날아감
      axios.defaults.headers.common.Authorization = accessToken;
      axios.defaults.headers.common.IsRefreshToken = false;
      console.log(
        'axios 헤더의 Authorization은 현재 :',
        axios.defaults.headers.common.Authorization,
      );
      // axios.defaults.headers.common['Cookie'] = `; email=${data.email}`

      navigation.navigate('Main');

      // 로그인 성공 반환
      // return true;
    })
    .catch(err => {
      console.log('로그인 에러 : ', err);
      // 로그인 실패 반환
      // return false;
    });
}

// 로그아웃 함수
export async function Logout({ navigation }) {
  // PopAlert(title = "로그아웃", message = "로그아웃 하시겠습니까?");
  const accessToken = await AsyncStorage.getData('accessToken');
  const refreshToken = await AsyncStorage.getData('refreshToken');
  // // console.log('access token : ', accessToken);
  // // console.log('refresh token : ', refreshToken);

  axios
    .post(
      URL.Logout,
      {
        accessToken,
        refreshToken,
      },
      {
        headers: {
          IsRefreshToken: false,
        },
      },
    )
    .then(res => {
      console.log('logout response : ', res);
      AsyncStorage.removeValue('accessToken');
      AsyncStorage.removeValue('refreshToken');
      delete axios.defaults.headers.common.Authorization;
      delete axios.defaults.headers.common.IsRefreshToken;
      navigation.navigate('Login');
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // // console.log('수신에러', error.response.data);
        // // console.log(error.response.status);
        // // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // // console.log('요청에러', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // // console.log('Error', error.message);
      }
      // // console.log('환경', error.config);
    });
}

// 토큰 재발급 함수
export async function RefreshToken() {
  const refreshToken = await AsyncStorage.getData('refreshToken');

  axios
    .get(URL.TokenRefresh, {
      headers: {
        Authorization: refreshToken,
        IsRefreshToken: true,
        query: '신길동 4166',
      },
      params: {
        query: '신길동 4166',
      },
    })
    .then(async res => {
      const { newAccessToken } = res.data.accessToken;
      const { newRefreshToken } = res.data.refreshToken;
      await AsyncStorage.storeData('accessToken', newAccessToken);
      await AsyncStorage.storeData('refreshToken', newRefreshToken);

      axios.defaults.headers.common.Authorization = newAccessToken;
      console.log(
        'axios 헤더의 Authorization은 현재 :',
        axios.defaults.headers.common.Authorization,
      );
    })
    .catch(err => {
      console.log('Refresh Token Error : ', err);
    });
}
