function multiply(num1, num2) {
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

  let res = BigInt(num1) * BigInt(num2);
  console.log(res.toString());
};
//测试用例
multiply("23","4") // ->"92"
multiply("235","263645") // ->"61956575"
multiply("2453465476867978","4756867978080890909") // ->"11670811362240247334432453213412002"