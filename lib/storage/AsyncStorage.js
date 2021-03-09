import AsyncStorage from '@react-native-community/async-storage';

// 문자열 저장
export const storeData = async (key, value) => {
    try {
        console.log("AsyncStorage 문자열 저장 인자 검사. key : ", key," value : ", value);
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        console.log("AsyncStorage 문자열 저장 오류");
    }
    console.log("AsyncStorage 문자열 저장 완료");
}

// 문자열 읽기
export const getData = async key => {
    try {
        console.log("AsyncStorage 문자열 읽기 인자 검사. key : ", key);
        return await AsyncStorage.getItem(key)
    } catch (e) {
        // error reading value
        console.log("AsyncStorage 문자열 불러오기 오류");
    }
    console.log("AsyncStorage 문자열 불러오기 완료");
    return null;
}

// 객체 저장
export const storeObjData = async (key, value) => {
    try {
        console.log("AsyncStorage 오브젝트 저장 인자 검사. key : ", key," value : ", value);
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
        console.log("AsyncStorage 오브젝트 저장 오류");
    }
    console.log("AsyncStorage 오브젝트 저장 완료");
}

// 객체 읽기
export const getObjData = async key => {
    try {
        console.log("AsyncStorage 오브젝트 읽기 인자 검사. key : ", key);
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log("AsyncStorage 오브젝트 불러오기 오류");
    }
    console.log('AsyncStorage 오브젝트 불러오기 완료');
    return null;
}

// 삭제
export const removeValue = async key => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
      console.log("AsyncStorage 삭제 오류");
    }
  
    console.log('AsyncStorage 삭제 완료')
  }