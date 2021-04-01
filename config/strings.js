// API URL
// export const Server = 'http://localhost:8080';
// export const Server = 'http://localhost:8080';
export const Server = 'http://192.168.1.23:8080';

// auth API
export const Login = `${Server}/sign/signin`;
export const SignUp = `${Server}/sign/signup`;
export const Logout = `${Server}/sign/logout`;
export const TokenRefresh = `${Server}/sign/refresh`;

// Lecture API
export const NewLectureAPI = `${Server}/lecture/create`;
export const LectureListAPI = `${Server}/lecture/list`;
export const LectureDetailAPI = `${Server}/lecture/detail`;
export const LectureAddScheduleAPI = `${Server}/schedule`; // post 요청용
export const GetLectureScheduleAPI = `${Server}/schedule`; // get 요청용
export const ReservationAPI = `${Server}/reservation`;

// NaverMap API
// !---- 전송 시 헤더에 아래의 인증정보 추가 필요.
// !---- X-NCP-APIGW-API-KEY-ID:{Client ID}
// !---- X-NCP-APIGW-API-KEY:{Client Secret}
export const NMapClientID = '6oa9ddyfn0';
export const NMapClientSecret = 'kpqjd3ACDcdgQNiB3s3Wda0FpR9721EoSVBB5siy';
export const NMapGeocodingAPI =
  'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode';
