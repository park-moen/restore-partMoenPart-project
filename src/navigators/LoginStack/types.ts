import { StackScreenProps } from '@react-navigation/stack';

export type fadeEffectProp = { current: { progress: any } };

// route.params로 전달될 속성값들을 명시한다.
export type RootLoginStack = {
  Login: undefined;
  SignUp: { testId: number };
};

// 스크린 컴포넌트가 전달받을 navigation, route 프롭을 정의한다.
export type LoginProps = StackScreenProps<RootLoginStack, 'Login'>;
export type SignUpProps = StackScreenProps<RootLoginStack, 'SignUp'>;
