function generateTypeEffect () {
  let value = document.querySelector('.input').value;
  let h2 = document.querySelector('#showText');
  for (let i = 0; i < value.length; i++) {
    let out = value.slice(0,i + 1);
    setTimeout(() => {
      h2.innerHTML = out;
    },200 * i);
  }
}