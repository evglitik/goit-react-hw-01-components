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