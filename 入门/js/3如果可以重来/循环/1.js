// 将输入的十进制数字转化为二进制
const dec2bin = (num) => {
  let res = '';
  let ernums = [];
  while(num != 0) {
    ernums.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  ernums.forEach(n => {
    res += n;
  })
  return Number(res);
}

console.log(dec2bin(999));
