import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { launchImageLibrary } from 'react-native-image-picker';

export default function ImagePicker({ title = 'test', images, setImages }) {
  const [imagedata, setImagedata] = useState('');

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        {/* 자격증 사본 */}
        <View style={styles.subContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
          <View
            style={{
              backgroundColor: '#e0e0e0',
              padding: 10,
              margin: 3,
              borderRadius: 10,
            }}
          >
            {/* <Text style={{ color: 'red', marginBottom: 10 }}>주의!</Text> */}
            <Text>- 파일은 jpg, png, gif, bmp등 이미지 파일만 가능합니다.</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', height: 40, borderWidth: 1, borderColor: 'gray', padding: 8, margin: 5 }}> */}
          <TouchableOpacity
            style={styles.imageAddButton}
            onPress={() =>
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: true,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                async response => {
                  console.log(
                    '선택된 파일의 타입과 uri 확인 : ',
                    response.type,
                    response.uri,
                  );
                  setImagedata(
                    `data:${response.type};base64,${response.base64}`,
                  );
                  setImages(response);
                },
              )
            }
          >
            <Text>추가하기</Text>
          </TouchableOpacity>
          {/* </View> */}

          {images === '' ? null : (
            <View style={styles.shadow}>
              <Image style={styles.image} source={{ uri: imagedata }} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#5DCACB',
  },
  subContainer: {
    padding: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageAddButton: {
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    alignItems: 'center',
    height: 40,
    margin: 8,
    padding: 8,
    justifyContent: 'center',
    borderRadius: 5,
  },
  shadow: {
    // 모달 그림자 설정
    ...Platform.select({
      ios: {
        shadowColor: '#160f29', // "#020A96",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
