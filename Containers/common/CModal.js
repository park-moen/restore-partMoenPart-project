import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IconButton } from 'Containers/common/Button';

export default function CModal({
  modalVisible = false,
  modalClose = () => {},
  title = 'test',
  children,
  animation = 'pulse',
}) {
  return (
    <Modal animationType="fade" transparent visible={modalVisible}>
      <TouchableWithoutFeedback onPress={modalClose}>
        <View style={styles.rootModalContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Animatable.View animation={animation} style={styles.modalView}>
              <View style={styles.modalTitleContainer}>
                <Text style={styles.modalTitle}>{title}</Text>
                <View style={styles.closeButton}>
                  <IconButton
                    name="close-circle"
                    size={35}
                    onPress={modalClose}
                  />
                </View>
              </View>
              {children}
            </Animatable.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // 최상위 모달 컨테이너
  rootModalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  // 팝업될 모달 스타일
  modalView: {
    // flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    paddingBottom: 15,
    // alignItems: 'center',
  },
  // 닫기 버튼
  closeButton: {
    elevation: 2,
    alignSelf: 'flex-end',
  },
  // 모달 타이틀
  modalTitle: {
    textAlign: 'center',
    flex: 1,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '500',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textNotice: { padding: 1, paddingLeft: 10, color: 'grey' },
  errorContainer: { alignItems: 'center', paddingTop: 10 },
  textError: { color: 'red', justifyContent: 'center' },
  bold: { fontWeight: 'bold' },
  fontRed: { color: 'red' },
});
