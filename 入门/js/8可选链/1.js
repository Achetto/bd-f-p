// || 返回第一个 真 值。
// ?? 返回第一个 已定义的 值。
// 出于安全原因，JavaScript 禁止将 ?? 运算符与 && 和 || 运算符一起使用

let vip_customer_1 = {
  name: "Carl",
  vip: {
    num: "U-1001",
    country: "USA",
  },
};

let vip_customer_2 = {
  name: "Carl",
  vip: {
    num: "C-1001",
  },
};

let customer = {
  name: "Jennie",
};

const isVip = (cus) =>{
 // your code here
 return cus.vip?.num;
}

// //用例
// console.log(isVip(vip_customer_1)); // => 'U-1001'
// console.log(isVip(vip_customer_2)); // => 'C-1002'
// console.log(isVip(customer) ); //  => 'undefined'

 const getCountry = (customer) => {
  return customer.vip?.country ?? 'China';
};

//用例
console.log(getCountry(vip_customer_1));
 // => 'USA'
console.log(getCountry(vip_customer_2));
 // => 'China'
