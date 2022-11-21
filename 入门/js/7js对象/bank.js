const bankAcount = {
  name: 'teaper',
  balance: 666,
  rank: 1145141919,
  interestRatePercent: 0.02,
  deposit: (amount) => {
    bankAcount.balance += amount;
  },
  withdraw: (amount) => {
    bankAcount.balance -= amount;
  },
  printAccountInfo: () => {
    console.log(bankAcount.balance, bankAcount.rank, bankAcount.interestRatePercent);
  }
}

// 判断有没有vip这个属性
const isvip = (obj) => {
  if (obj.vip) return true;
  else return false;
}

// 遍历对象的属性
const bianli = (obj) => {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}

// 判断对象是否为空
const isEmpty = (obj) => {
  for (let key in obj) {
    // 如果进到循环里面，说明有属性。
    return false;
  }
  return true;
}
