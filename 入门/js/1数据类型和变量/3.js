// @description 实现判断参数是否为合法的数字类型，如何是返回 ture ，如果不是 返回 false。
// @method isNumeric
// @param num 任意数据类型的变量
// @return {Boolean} 如何是数字类型返回 ture ，如果不是 返回 false。

function isNumeric(num) {
  return typeof(num) === 'number';
}

//测试用例
console.log(isNumeric("0")); // ->false
console.log(isNumeric(0)); // ->true
console.log(isNumeric(null)); // ->false
console.log(isNumeric("")); // ->false
console.log(isNumeric(" ")); // ->false