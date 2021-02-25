// API URL
export const Server = 'http://localhost:8080';

// auth API
export const Login = `${Server}/sign/signin`;
export const SignUp = `${Server}/sign/signup`;
export const Logout = `${Server}/sign/logout`;
export const TokenRefresh = `${Server}/sign/refresh`;

// Lecture API
export const NewLectureAPI = `${Server}/lecture/create`;
export const LectureListRegionAPI = `${Server}/lecture/list/region`;
export const LectureListRegionAPIFunc = ({ region, page, size }) => {
  return `${LectureListRegionAPI}?region=${region}&page=${page}&size=${size}`;
};
export const LectureDetailAPI = `${Server}/lecture/detail`;
export const LectureDetailAPIFunc = ({ id }) => {
  return `${LectureDetailAPI}?id=${id}`;
};
