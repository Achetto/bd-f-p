function concatString(firstStr, lastStr) {
  if (firstStr.includes(' ') || lastStr.includes(' ')) {
    return firstStr.trim() + ',' + lastStr.trim();
  }
  return firstStr + ' ' + lastStr;  
}

console.log(concatString("Jennie", "Kim")); 
// "Jennie Kim"
console.log(concatString(" Congratulation!", "you are the winner")); 
// "Congratulation!,you are the winner"

function sayHello(name) {
  return `Hello, ${name}`;
}

//测试用例
console.log(sayHello("Amy")); // "Hello, Amy"