// 实现两个数组拼接,返回一个新数组
function arrJoin(arr1,arr2){
  return arr1.concat(arr2);
}
// //测试用例
// let arr1 = ['1','2','3'];
// let arr2 = ['3','6','1']
// console.log(arrJoin(arr1,arr2)); // -> ['1','2','3','3','6','1']


// 利用reduce()实现两个数组归并
function arrMerge(arr1,arr2){
  let res = arr2.reduce((pre, cur) => {
    if (!pre.includes(cur)) return pre.concat(cur);
    else return pre;
  }, arr1);
  return res;
}

// //测试用例
// let arr1 = ['1','2','3'];
// let arr2 = ['3','6','1']
// console.log(arrMerge(arr1,arr2)); // -> ['1','2','3','6']

// 封装数组去重函数,去除数组中重复的元素,
function norepeat(){
  let res = arr.reduce((pre,cur) => {
    if(!pre.includes(cur)) pre.push(cur);
    return pre;
  }, [])
  return res;
}

// //测试用例
// let arr = ['a','ab','a'];
// console.log(norepeat(arr)); // -> ['a','ab']

// 实现方法检测数组是否包含特定值
function inArray(arr, value){
  return arr.includes(value);
}

// //测试用例
// let arr = ['a','ab','a'];
// console.log(inArray(arr,'b')); // -> false
// console.log(inArray(arr,'a')); // ->true


// 实现多维数组变为一维数组
function matrixElements(arr){
  let res = arr.reduce((pre, cur) => {
    return pre.concat(cur);
  },[])
  return res;
}

//测试用例
let rows = [[2, 3, 5], [1, 2, 4], [8, 5, 5]]
console.log(matrixElements(rows)) //[2,3,5,1,2,4,8,5,5]