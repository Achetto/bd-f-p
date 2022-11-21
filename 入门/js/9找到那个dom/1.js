// 获取当前element元素所有的兄弟节点
function getSiblings(element) {
  let a = [];
  let p = element.parentNode.children;
  for (let i = 0; i < p.length; i++) {
    if(p[i] !== elm) a.push(p[i]);
  }
  return a;
}

// 获取当前element元素前一个兄弟节点
function getPrev(element) {
  return element.previousSibling;
}

// 获取element元素之前所有的兄弟节点
function getPrevaAll(element) {
  let a = [];
  let p = element.parentNode.children;
  for (let i = 0; i < p.length; i++) {
    if(p[i] === elm) return a;
    else a.push(p[i]);
  }
  return a;
}

// 获取element元素之后第一个兄弟节点
function getNext(element) {
  return element.nextSibling;
}

// 获取element元素之后所有的兄弟节点
function getNextAll(element) {
  let a = [];
  let p = element.parentNode.children;
  let start = false;
  for (let i = 0; i < p.length; i++) {
    if (start) a.push(p[i]);
    if(p[i] === elm) start = true;
  }
  return a;
}

// 获取元素的所有子节点
function getSon(element) {
  return element.children;
}
//获取元素的第一个子节点
function getFirstSon(element) {
  return element.firstChild;
}

// 
function getParent(element) {
  return element.parentNode;
}
// 判断element的节点类型，并且返回
function getNodeType(element) {
  return element.nodeType;
}

// 获取element元素完整的HTML内容
function getHTMLContent(element) {
  return element.innerHTML;
}
// 获取element元素的文本内容
function getText(element) {
  return element.innerText;
}
