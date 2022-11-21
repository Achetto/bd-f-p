var scoreObject = {
  Tony: {
    Math: 95,
    English: 79,
    Music: 68,
  },
  Simon: {
    Math: 100,
    English: 95,
    Music: 98,
  },
  Annie: {
    Math: 54,
    English: 65,
    Music: 88,
  },
};

//实现对象转换为数组
function objToArr(obj) {
  let arr = [];
  Object.keys(obj).forEach(v => {
    arr.push([v, obj[v].Math, obj[v].English, obj[v].Music])
  })
  return arr;
}

// console.log('objToArr(scoreObject)',objToArr(scoreObject));

var menuArr = [
  [1, "Area1", -1],
  [2, "Area2", -1],
  [3, "Area1-1", 1],
  [4, "Area1-2", 1],
  [5, "Area2-1", 2],
  [6, "Area2-2", 2],
  [7, "Area1-2-3", 4],
  [8, "Area2-2-1", 6],
];

//实现数组转换为对象
function arrToObj(arr){
  let newarr = arr.map(n => {
    const newn = {
      menuId: n[0],
      parentNode: n[1].slice(4)
    };
    return newn;
  })
  
  var arr = [...newarr];
  // 查找一级 
  var tree = arr.filter((v) => v.parentNode.split("-").length === 1);
  // 查找二级
  tree.map((v) => {
    v.children = arr.filter(
      ({ parentNode }) =>
        parentNode.slice(0, parentNode.length - 2) === v.parentNode
    );
    if (v.children.length == 0) v.children = [];
    else {
      v.children.map((item) => {
        // 查找三级
        item.children = arr.filter(
          ({ parentNode }) =>
            parentNode.slice(0, parentNode.length - 2) === item.parentNode
        );
        if (item.children.length == 0) item.children = [];
        return item;
      });
    }
    return v;
  });
  return tree;
}

console.log('arrToObj(menuArr)',arrToObj(menuArr))
