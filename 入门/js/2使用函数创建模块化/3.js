function temperatureBodyDetection(success,fail){
  let temper = prompt("请输入您的体温(摄氏度)","37");
  if(temper >= 36 && temper <= 38) success(); /*执行成功函数*/
  else fail(); /*执行失败函数*/
}

var success = () => {
  alert("体温正常，打卡成功!");
}
var fail = () => {
  alert("体温异常，打卡失败!");
}

temperatureBodyDetection(success,fail); /**调用打卡函数**/
