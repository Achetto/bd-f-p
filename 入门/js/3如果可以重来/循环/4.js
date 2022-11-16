// 在 Console 中按行输出 n * m = t
for (var i = 1; i <= 9; i++){
  for (var j = 1; j <= i; j++) {
    document.write(i + '*' + j + '=' + (i*j) + '&nbsp  ');
  }
  document.write('<br>');//换行
}