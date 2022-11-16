let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let height = document.querySelector('[name="height"]').value;
  let weight = document.querySelector('[name="weight"]').value;
  let result = document.querySelector('#result');
  let BMI = Math.round(weight / (height * height));
  if (BMI < 18.5) result.innerHTML = '您是偏瘦体型，可以适当增肥咯';
  if (BMI >= 18.5 && BMI < 25) result.innerHTML = '您是标准体型，保持的不错哟';
  if (BMI >= 25 && BMI < 28) result.innerHTML = '您是微胖体型，可以多吃粗粮，让饮食结构更加健康吧!';
  if (BMI >= 28 && BMI < 32) result.innerHTML = '您是肥胖体型，管住嘴迈开腿开始减肥吧!';
  if (BMI >= 32) result.innerHTML = '您是肥胖体型，管住嘴迈开腿开始减肥吧!';
});