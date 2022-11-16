
// @method calculateSum
// @param {number }price 打折钱的总消费额
// @param {Boolean}vip 是否为 vip
// @return {number} 返回打折后的总金额

// 满 300 减 30，满 200 减 10，满 100 减 5.
// 会员打 9.8 折
// 当两个优惠条件都满足时，就先打 9.8 折，再进行满减

function calculateSum(price,vip){
  if (vip) price = 0.98 * price;
  if (price >= 300) return price - 30;
  if (price >= 200) return price - 10;
  if (price >= 100) return price - 5;
}
console.log(calculateSum(300,false)) 
// 270
console.log(calculateSum(300,true))
// 284