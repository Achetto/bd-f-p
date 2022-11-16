let d1 =  new Date();
let h = d1.getHours();
if (h >= 6 && h < 10) alert('早上好');
if (h >= 10 && h < 14) alert('中午好');
if (h >= 14 && h < 18) alert('下午好');
if (h >= 18 || h < 6) alert('晚上好');