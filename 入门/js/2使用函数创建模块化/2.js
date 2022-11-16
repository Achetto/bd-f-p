const showMessage = (name) => {
  return `hello,${name}!`;
}
setTimeout(() => {
  console.log(showMessage("teaper"));
}, 1000)