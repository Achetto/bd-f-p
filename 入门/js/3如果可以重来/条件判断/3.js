let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let num = document.querySelector('.num').value;
  num = Number(num);
  if (Number.isFinite (num)) {
    let a = num % 10;
    let b = parseInt(((num / 10) % 10));
    let c = parseInt(num / 100);
    if (num == a * a *a + b * b * b + c * c * c) alert(`${num} 是水仙花数`);
    else alert(`${num} 不是水仙花数`);
  } else {
    alert('请输入三位数');
  }
});