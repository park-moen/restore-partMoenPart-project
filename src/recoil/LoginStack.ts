import { atom } from 'recoil';

export type IsValid = 'normal' | 'false' | 'true';

export const isEmailValid = atom<IsValid>({
  key: 'isEmailValid',
  default: 'normal',
});

export const isPWValid = atom<IsValid>({
  key: 'isPWValid',
  default: 'normal',
});
