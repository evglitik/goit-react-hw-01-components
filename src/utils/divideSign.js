export function divideSign(num) {
  let str = num.toString();
  if (str.length >= 4) {
    let arr = [...str];
    arr[str.length - 4] += ',';
    return arr.join('');
  } else {
      return str;
  }
}

export const firstToUperScapes = str => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}