import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Header from './Header';
import InputEmail from './InputEmail';
import InputPwd from './InputPwd';
import InputPwdChk from './InputPwdChk';
import InputName from './InputName';
import InputAge from './InputAge';
import InputGender from './InputGender';
import InputRole from './InputRole';
import Buttons from './Buttons';

export default function SignUpComponent({
  navigation,
  data,
  textEmailChange,
  textNameChange,
  textAgeChange,
  textGenderChange,
  textRoleChange,
  textPasswordChange,
  textConrifmPasswordChange,
  updateChkSecure,
  submitSingUP,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          {/* 이메일 입력란 */}
          <InputEmail data={data} textEmailChange={textEmailChange} />

          {/* 패스워드 입력란 */}
          <InputPwd
            data={data}
            textPasswordChange={textPasswordChange}
            updateChkSecure={updateChkSecure}
          />
          {/* 패스워드 확인란 */}
          <InputPwdChk
            data={data}
            textConrifmPasswordChange={textConrifmPasswordChange}
            updateChkSecure={updateChkSecure}
          />

          {/* 이름 입력란 */}
          <InputName data={data} textNameChange={textNameChange} />
          {/* 나이 입력란 */}
          <InputAge data={data} textAgeChange={textAgeChange} />
          {/* 성별 입력란 */}
          <InputGender data={data} textGenderChange={textGenderChange} />
          {/* 유저 유형 선택란 */}
          <InputRole data={data} textRoleChange={textRoleChange} />

          {/* 버튼 */}
          <Buttons
            data={data}
            navigation={navigation}
            submitSingUP={submitSingUP}
          />
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  footer: {
    flex: 7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
