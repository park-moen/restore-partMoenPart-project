import React, { useState } from 'react';
import { View, Animated, Pressable, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTransitionColor from '../Login/useTransitionColor';
import styles from './styles';
// import LoginFailModal from './LoginFailModal';

export default function LoginWithEmail() {
  const TransitionPressable = Animated.createAnimatedComponent(Pressable);
  const TransitionText = Animated.createAnimatedComponent(Text);
  const [isPWVisible, setIsPWVisible] = useState(false);
  const [isValid, setIsValid, interpolations] = useTransitionColor();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        textContentType={'newPassword'}
        secureTextEntry={isPWVisible ? false : true}
        placeholder="비밀번호를 입력해주세요"
        style={styles.TextInput}
        onChangeText={e => {
          if (e.length > 3) {
            setIsValid('true');
            return;
          }
          setIsValid('false');
        }}
      />
      <Pressable
        style={styles.TextInputIconContainer}
        onPress={() => setIsPWVisible(s => !s)}
      >
        <Ionicons
          name="eye"
          size={20}
          style={[
            styles.TextInputIcons,
            {
              color: isPWVisible ? '#343434' : '#E0E0E1',
            },
          ]}
        />
      </Pressable>

      <TransitionPressable
        disabled={!isValid}
        style={[
          styles.transitionPressable,
          { backgroundColor: interpolations.backgroundColorInterpolation },
        ]}
      >
        <TransitionText
          style={[
            styles.transitionText,
            { color: interpolations.colorInterpolation },
          ]}
        >
          로그인하기
        </TransitionText>
      </TransitionPressable>
      <Pressable>
        <Text style={styles.underlineText}>비밀번호를 잊으셨나요?</Text>
      </Pressable>
      {/* {!isModalOpen && (
        <LoginFailModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )} */}
    </View>
  );
}
