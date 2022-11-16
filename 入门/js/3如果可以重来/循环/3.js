// 从 1 到 100 ，以此在 console 输出各数字，
//但是，当数字为 3 的倍数或者含有 3 的时候，输出“PA”
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('PA');
    continue;
  } 
  i = String(i);
  if (i.includes('3')) {
    console.log('PA');
    continue;
  }
  console.log(i);
}