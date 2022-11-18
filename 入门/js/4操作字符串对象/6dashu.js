function largeNumAdd(num1, num2) {
  let reg = RegExp(/^[0-9]*$/);
  if (
    num1[0] == 0 || 
    num2[0] == 0 ||
    !reg.test(num1) ||
    !reg.test(num2)
    ) {
    console.log('请输入正确的数字');
    return;
  } 

  let res = BigInt(num1) + BigInt(num2);
  console.log(res.toString());
}

//测试用例
largeNumAdd("11", "123") // ->"134"
largeNumAdd("235656","746433225") // ->""746668881""
largeNumAdd("3456786543355","222222234567778") // ->"225679021111133"
largeNumAdd("05415","222222234567778")
largeNumAdd('asd','54')
largeNumAdd('5464','wqewqe545')