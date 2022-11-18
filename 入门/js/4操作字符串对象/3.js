const getCountTodos = (todos) => {
  return todos.split(",").length;
};

// console.log(getCountTodos("Laundry, Wash dishes, Clean table")); // 3
// console.log(getCountTodos("Feed cat, Degrease bike chain")); // 2

// 字符串去重
function removeRepetition(str) {
  let now = '';
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== now) {
      now = str[i];
      res += now;
    } 
  }
  return res;
}

// console.log(removeRepetition("aaa")); // ->a
// console.log(removeRepetition("abbba")); // ->aba
// console.log(removeRepetition("aabbaabb")); // ->abab
// console.log(removeRepetition("")); // ->
// console.log(removeRepetition("abc")); // ->abc

// 是否是回文
function isPalindromicString(str) {
  let res = true;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 - i]) res = false;
  }
  return res;
}

// 测试用例

console.log(isPalindromicString("aaa")); // ->true
console.log(isPalindromicString("madam")); // ->true
console.log(isPalindromicString("hello")); // ->false
