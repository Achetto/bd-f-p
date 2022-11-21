读取动态属性值使用方括号,量 或者加个引号 obj['name'] 这样读取值 
检查属性是否存在的操作符 "in"
"key" in object

Object.keys(obj) —— 返回一个包含该对象所有的键的数组。
Object.values(obj) —— 返回一个包含该对象所有的值的数组。
Object.entries(obj) —— 返回一个包含该对象所有 [key, value] 键值对的数组。

浅拷贝
let clone = Object.assign({}, user);

深拷贝
function deepClone(src) {
  let res = src instanceof Array? []: {};
  for (const [k, v] of Object.entries(src)) {
    res[k] = typeof v == 'object'? deepClone(v): v;
  }
  return res;
}

与原始类型相比，对象和它们的区别是什么？
JS 中有八种数据类型。有七种原始类型，因为它们的值只包含一种东西（字符串，数字或者其他）
对象则用来存储键值对和更复杂的实体
原始类型存储的是值，对象类型存储的是地址。

什么是浅拷贝？什么是深拷贝？请说说它们的区别
浅拷贝：也就是拷贝A对象里面的数据，但是不拷贝A对象里面的子对象
深拷贝：会完全克隆出一个对象，数据相同，但是引用地址不同