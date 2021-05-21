import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo';

import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import useTransitionColor from './useTransitionColor';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  const navigation = useNavigation();
  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isValid, setIsValid, interpolations] = useTransitionColor({
    screen: 'Login',
  });

  useEffect(() => {
    return () => setIsValid('normal');
  }, [setIsValid]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>나만의 다이빙 일정을 관리해보세요.</Text>
      <Text style={styles.explanation}>
        회원 정보가 없을 시, 회원가입 단계로 넘어갑니다
      </Text>
      <View style={styles.middleContainer}>
        <CheckBox
          title="Click Here"
          size={20}
          onIconPress={() => setToggleCheckBox(s => !s)}
          containerStyle={{
            width: 20,
            height: 20,
          }}
          Component={TouchableOpacity}
          checked={toggleCheckBox}
          checkedColor={'rgb(32, 122, 180)'}
          // onPress={() => setToggleCheckBox(s => !s)}
        />
        <Pressable
          onPress={() => setToggleCheckBox(s => !s)}
          style={styles.button}
        >
          <Text style={styles.checkBoxText}>이메일 저장</Text>
        </Pressable>
      </View>
      <TextInput
        style={styles.emailInput}
        placeholder="이메일 주소를 입력해주세요"
        textContentType={'emailAddress'}
        // isValid={isValid}
        onEndEditing={e => {
          if (checkEmailValidation(e.nativeEvent.text)) {
            setIsValid('true');
            return;
          }
          setIsValid('false');
        }}
      />
      {isValid === 'true' && (
        <Entype
          name={'check'}
          size={24}
          color={'#38D1A8'}
          style={styles.checkIcon}
        />
      )}
      {isValid !== 'true' && (
        <Text style={styles.guideTextInvalid}>
          {isValid === 'false'
            ? '올바른 형태의 이메일 주소를 작성해주세요.'
            : ''}
        </Text>
      )}
      {isValid === 'true' && (
        <Text style={styles.guideTextValid}>
          올바른 형태의 이메일 주소입니다.
        </Text>
      )}
      <TransitionPressable
        disabled={isValid === 'true' ? false : true}
        onPress={() => {
          navigation.navigate('LoginWithEmail');
        }}
        style={[
          styles.transitionPressable,
          { backgroundColor: interpolations.backgroundColorInterpolation },
        ]}
      >
        <TransitionText
          style={[
            styles.buttonText,
            { color: interpolations.colorInterpolation },
          ]}
        >
          이메일로 시작
        </TransitionText>
      </TransitionPressable>
      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>간편 시작</Text>
        <View style={styles.iconView}>
          <Image
            source={require('../../assets/kakao_logo.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>카카오로 로그인</Text>
        </View>
        <View style={styles.iconView}>
          <Image
            source={require('../../assets/naver_logo.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>네이버로 로그인</Text>
        </View>
        <View style={styles.iconView}>
          <Image
            source={require('../../assets/google_logo.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>구글로 로그인</Text>
        </View>
      </View>
      <Pressable>
        <Text style={styles.underlineText}>로그인에 문제가 생겼나요?</Text>
      </Pressable>
    </View>
  );
}

function checkEmailValidation(email: string): boolean {
  // const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regex = /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9-_]+).([a-z]{2,20})(.[a-z]{2,10})$/;
  return regex.test(email);
}
