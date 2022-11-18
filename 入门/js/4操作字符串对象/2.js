const data = [
  "monday - 500ml",
  "mONday - 330",
  "monday - 150ml",
  "Tuesday - 100ml",
  "Tuesday - 330ml",
  "weDnesDay - 230",
  "TursDAy - 330ml",
  "Friday - 500",
  "Saturday - 100ml",
  "sunday - 250",
  "sunday - 100ml",
];

// 数据清洗
for (let i = 0; i < data.length; i++) {
  data[i] = data[i].slice(0,1).toUpperCase() + data[i].slice(1).toLowerCase();
  data[i] = data[i].replaceAll('-',':');
  if (!data[i].endsWith('ml')) data[i] += 'ml';
}

// 查找对应的星期的喝水量
const query = (day, data) => {
  day = day.trim().toLowerCase().slice(1);
  const res = [];
  data.forEach(n => {
    if (n.includes(day)) res.push(n);
  })
  return res;
};

// 判断是否喝够水
const EnoughWater = (waters) => {
  let res = 0;
  for (let i = 0; i < waters.length; i++) { 
    res += Number(waters[i].slice(-5,-2));
  }
  if (res >= 500) console.log('you have drink enough water');
  else console.log('please drink enough enough water every day');
}

let day1 = query('monday', data);
EnoughWater(day1);
let day2 = query('tuesday', data);
EnoughWater(day2);