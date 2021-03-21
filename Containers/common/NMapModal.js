import React from 'react';
import {
  Modal,
  TouchableHighlight,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import NaverMap from './NaverMap';

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
