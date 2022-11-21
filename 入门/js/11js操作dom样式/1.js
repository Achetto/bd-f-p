// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  element.classList.add('newClassName');
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
  element.classList.remove('oldClassName');
}

// 判断element类名是否含有 className
function hasClass(element, className) {
  return element.classList.contains('className');
}

// 判断 element类名是否含有 oldClassName,如果存在，就把它替换成newClassName。如果不存在，就不做任何操作
function replaceClass(element, oldClassName , newClassName) {
  if (element.classList.contains('oldClassName')) {
    element.classList.replace('oldClassName', 'newClassName');
  }
}