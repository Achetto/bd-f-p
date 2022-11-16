// 新的需求是，转化显示后的二进制数为 bin-bit 中输入的数字宽度，例如
// dec-number 为 5 ，bin-bit 为 5 ，则转化后数字为 00101
// 如果 bin-bit 小于转化后的二进制本身位数，则使用原本的位数，
// 如 dec-number 为 5 ，bin-bit 为 2 ，依然输出 101 ，但同时在 console 中报个错。

let dec_number = 5;
let bin_bit = 2;

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
  while (res.length < bin_bit) {
    res = '0' + res;
  }
  if (res.length > bin_bit) console.log('error');
  return res;
}

console.log(dec2bin(dec_number));