function encrypt(offset,str){
  let res = ''
  for (let i = 0; i < str.length; i++) {
    res += String.fromCodePoint(str[i].codePointAt(0) + offset);
  }
  return res;
}

function decrypt(offset,str){
  let res = ''
  for (let i = 0; i < str.length; i++) {
    res += String.fromCodePoint(str[i].codePointAt(0) - offset);
  }
  return res;
}

let test = 'This is a test.';
let en = encrypt(32,test);
console.log(en);
let jie = decrypt(32,en);
console.log(jie);
