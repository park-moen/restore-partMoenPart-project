// 문자열 자릿수를 맞춰서 반환
export function fillZero(width: number, str: string): string {
  return str.length >= width
    ? str
    : new Array(width - str.length + 1).join('0') + str; // 남는 길이만큼 0으로 채움
}
