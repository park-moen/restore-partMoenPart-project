import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Buttons({ navigation, submitSingUP }) {
  return (
    <>
      <View style={styles.container}>
        {/* 가입하기 버튼 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            submitSingUP();
          }}
        >
          <LinearGradient colors={['#000', '#000']} style={styles.button}>
            <Text style={[styles.text, styles.textSignUp]}>가입하기</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* 회원가입 버튼 */}
        <TouchableOpacity
          style={[styles.button, styles.buttonSinup]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.text, styles.textSignIn]}>
            이미 계정이 있나요? 로그인하기
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },

  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonSinup: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 15,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSignUp: {
    color: '#fff',
  },
  textSignIn: {
    color: '#000',
  },
});
