person = {name: ''};

function addID(id){
  //给person对象添加一个ID属性
  Object.defineProperty(person, 'id', {
    value: id, //值为'1'
    writable: false, //不可重写，只可读
    enumerable: false, //不可枚举
    configurable: false, //不可删除
  })
}

//测试用例
addID(1)
console.log(person.id); // logs 1
delete person.id; // Nothing happens
console.log(person.id); // logs 1
console.log(person.propertyIsEnumerable('id')); // false
person.id = 2; // throws TypeError: "id" is read-only
console.log(person.id);