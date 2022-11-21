let shoppingList = {
  hamburger: 12,
  milk: 5,
  orange: 25,
  banana: 49,
  ipad: 10111,
};

// 获取购物清单所有的商品
function getKeys(obj) {
  return Object.keys(obj);
}

// console.log('getKeys(shoppingList)',getKeys(shoppingList));

// 获取购物清单所有商品的价格
function getVals(obj) {
  return Object.values(obj);
}

// console.log('getVals(shoppingList)',getVals(shoppingList));

// 计算购物清单总价
function sumshoppingList(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0)
}

// console.log('sumshoppingList(shoppingList)',sumshoppingList(shoppingList));

// 给购物清单排序
function ordershoppingList(obj, ascendingOrder) {
  let sortKeys = {}
  if (ascendingOrder) {
    sortKeys = Object.entries(obj).sort((a, b) => {
      return a[1] - b[1];
    })
  } else {
    sortKeys = Object.entries(obj).sort((a, b) => {
      return  b[1] - a[1];
    })
  }
  return sortKeys;
}

// console.log(ordershoppingList(shoppingList, false));

