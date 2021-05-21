import { atom } from 'recoil';

export type IsValid = undefined | boolean;

export const isEmailValid = atom<IsValid>({
  key: 'isEmailValid',
  default: undefined,
});

export const isPWValid = atom<IsValid>({
  key: 'isPWValid',
  default: undefined,
});
