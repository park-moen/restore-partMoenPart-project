import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
  Alert,
  Text,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from 'react-native';

//  배열요소 개수만큼 버튼 컴포넌트 생성,반환
function MakeButtonList({ data, visible, setVisible, setChoice }) {
  const buttons = [];

  data.forEach((element, index) => {
    buttons.push(
      <TouchableHighlight
        style={{ ...styles.openButton }}
        onPress={() => {
          setVisible(!visible);

          console.log('choice element : ', element);
          setChoice(element);
        }}
        key={index}
      >
        <Text style={styles.textStyle}>{element}</Text>
      </TouchableHighlight>,
    );
  });

  return buttons;
}

//  모달 생성
export default function ModalComponent({
  visible,
  setVisible,
  data,
  title = 'test',
  choice,
  setChoice,
}) {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            borderWidth: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(false);
            }}
          >
            <View style={styles.centeredView}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.modalView}>
                  <Text style={styles.title}>{title}</Text>
                  <View style={{ justifyContent: 'center' }}>
                    <ScrollView>
                      <MakeButtonList
                        data={data}
                        choice={choice}
                        setChoice={setChoice}
                        visible={visible}
                        setVisible={setVisible}
                      />
                    </ScrollView>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // 전체 컨테이너 스타일
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // 팝업될 모달 스타일
  modalView: {
    flex: 1,
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,

    // 모달 그림자 설정
    ...Platform.select({
      ios: {
        shadowColor: 'black', // "#020A96",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  // 버튼
  openButton: {
    backgroundColor: 'gray', // "#020A96",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    marginBottom: 5,
  },

  // 버튼 안의 텍스트
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },

  // 모달 안의 텍스트
  title: {
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
