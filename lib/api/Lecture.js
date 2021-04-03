import axios from 'axios';
import {
  GetLectureScheduleAPI,
  ReservationAPI,
  LectureListAPI,
  LectureDetailAPI,
} from 'config/strings';

export const LectureListAPIFunc = async ({
  region,
  costCondition,
  certificateKind,
  groupName,
  page,
  size,
}) => {
  try {
    const url = `${LectureListAPI}?page=${page}&size=${size}`;
    const res = await axios.post(url, {
      groupName,
      region,
      costCondition,
      certificateKind,
    });
    const { lectureSearchResultList } = res.data._embedded;

    console.log('강의 리스트 조회 성공 : ', lectureSearchResultList);
    return lectureSearchResultList;
  } catch (err) {
    console.log('강의 리스트 조회 실패 : ', err);
    return -1;
  }
};

export const LectureDetailAPIFunc = ({ id }) => {
  return `${LectureDetailAPI}?id=${id}`;
};

export const getLectureSchedule = async ({ lectureId }) => {
  try {
    const response = await axios.get(GetLectureScheduleAPI, {
      params: {
        lectureId,
      },
    });
    // console.log('getLectureSchedule success : ', response.data._embedded);
    return response;
  } catch (e) {
    // console.log('getLectureSchedule error : ', e);
    return false;
  }
};

export const reservationAPI = async ({
  scheduleId,
  reservationDateList,
  equipmentList,
  description,
  navigation,
}) => {
  try {
    const res = await axios.post(ReservationAPI, {
      scheduleId,
      reservationDateList,
      equipmentList,
      description,
    });
    if (res.status === 201) {
      console.log('강의등록 성공 201');
      navigation.navigate('Main');
    } else {
      console.log('강의등록 문제 있음 : ', res);
    }
  } catch (e) {
    console.log('강의등록 에러', e);
  }
};
