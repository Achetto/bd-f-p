let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let height = document.querySelector('[name="height"]').value;
  let weight = document.querySelector('[name="weight"]').value;
  let result = document.querySelector('#result');
  let BMI = Math.round(weight / (height * height));
  let qk = 1;
  if (BMI < 18.5) qk = 1;
  if (BMI >= 18.5 && BMI < 25) qk = 2;
  if (BMI >= 25 && BMI < 28) qk = 3;
  if (BMI >= 28 && BMI < 32) qk = 4;
  if (BMI >= 32) qk = 5;
  switch (qk) {
    case 1:
      result.innerHTML = '您是偏瘦体型，可以适当增肥咯';
      break;
    case 2:
      result.innerHTML = '您是标准体型，保持的不错哟';
      break;
    case 3:
      result.innerHTML = '您是微胖体型，可以多吃粗粮，让饮食结构更加健康吧!';
      break;
    case 4:
      result.innerHTML = '您是肥胖体型，管住嘴迈开腿开始减肥吧!';
      break;
    case 5:
      result.innerHTML = '您是肥胖体型，管住嘴迈开腿开始减肥吧!';
      break;
  }
});