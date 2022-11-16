/*
实现一个判断传入的参数是否为 undefined 类型
返回一个布尔值，如果是undefied 为true，否之，为false
*/
function isUndefined(arg) {
  if (typeof arg === 'object') return JSON.stringify(arg) === "{}";  // 为了使得空对象是undefined
  return typeof arg === 'undefined';
}

/*
实现一个判断传入的参数是否为 null 类型
返回一个布尔值，如果是null 为true，否之，为false
*/
function isNull(arg) {
  return arg === null;
}

// 测试用例
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->true
console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false

// console.log( "Hello World" % 4)
// console.log("Hello Word + 1 + 2");
// console.log("Hello Word " + 1 + 2);