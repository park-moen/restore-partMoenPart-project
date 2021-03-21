import axios from 'axios';
import { GetLectureSchedule } from 'config/strings';

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

// export const createLecture = async ({ lectureId }) => {
//  return();
// };
