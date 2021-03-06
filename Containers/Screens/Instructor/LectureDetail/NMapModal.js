import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import NaverMap from '../../../common/NaverMap';

export default function NMapModal({
  picker,
  visible = false,
  onPressExit = () => {},
  title = '',
}) {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      {/* 모달 바깥 */}
      <TouchableWithoutFeedback onPress={onPressExit}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 10,
          }}
        >
          {/* 모달 구현체 */}
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: '#8FFCEA',
                padding: 5,
                height: '60%',
                width: '100%',
                opacity: 1,
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  padding: 3,
                  flexDirection: 'row',
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 20,
                    marginLeft: 5,
                    flex: 1,
                  }}
                >
                  {title}
                </Text>
                <TouchableHighlight
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    padding: 3,
                  }}
                  onPress={onPressExit}
                >
                  <Feather name="x" size={20} />
                </TouchableHighlight>
              </View>
              <NaverMap center={picker} picker={picker} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

// const styles = StyleSheet.create({
//   // 전체 컨테이너 스타일
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     marginTop: 22,
//     flexDirection: 'row',
//     // height: 500,
//   },

//   // 팝업될 모달 스타일
//   modalView: {
//     flex: 1,
//     margin: 10,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     alignItems: 'center',

//     // 모달 그림자 설정
//     ...Platform.select({
//       ios: {
//         shadowColor: '#009900',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 1,
//         shadowRadius: 5,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//   },

//   // 버튼
//   openButton: {
//     backgroundColor: '#009900',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },

//   // 버튼 안의 텍스트
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

//   // 모달 안의 텍스트
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
