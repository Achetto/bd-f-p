let scores = ["88", "90", "100", "45", "60", "98", "32", "99", "80"];

// 计算学生的总分数
function getTotalScore(scores) {
 const sum = scores.reduce((pre,cur) => {
  return pre + Number(cur)
 }, 0)
 return sum;
}

// console.log('getTotalScore(scores)',getTotalScore(scores))


//获得学生的平均分
function getAverageScore(scores) {
  return getTotalScore(scores) / scores.length;
}

// console.log('getAverageScore(scores)',getAverageScore(scores));

// 获得挂科的分数
function getFailScores(scores) {
  const guakes = scores.filter(n => {
    return Number(n) < 60;
  })
  return guakes;
}

// console.log('getFailScores(scores)',getFailScores(scores))


// 获得加五分之后的成绩单，如果加五分之后，分数超过了100，就取100分
function getAddFiveScores(scores) {
  const newScores = scores.map(n => {
    if (Number(n) + 5 > 100) return '100';
    else return (Number(n) + 5).toString();
  })
  return newScores;
}

// console.log('getAddFiveScores(scores)',getAddFiveScores(scores))

// 计算学生奖学金
function getPrize(scores) {
  let sumprize = 0;
  scores.forEach(n => {
    if (Number(n) >= 90) sumprize += 100;
  })
  return sumprize;
}
// console.log('getPrize(scores)',getPrize(scores))