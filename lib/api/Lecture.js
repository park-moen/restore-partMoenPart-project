import axios from 'axios';
import { GetLectureSchedule, ReservationAPI } from 'config/strings';

export const getLectureSchedule = async ({ lectureId }) => {
  try {
    const response = await axios.get(GetLectureSchedule, {
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
