
/**
 * @description 返回成绩表格 html 字符串
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 *  <tr>
        <td>学生姓名</td>
        <td>学生总分</td>
    </tr>
 */
function renderScoreTableRows(rows) {
    let res = '';
    rows.forEach(n => {
        res += `<tr>
                    <td>${n[0]}</td>
                    <td>${n[1]}</td>
                </tr>`;
    })
    return res;
}
/**
 * @description 返回第一名列表 html 字符串 
 * @param {array[][]} rows
 * @returns {string} html
 * 返回的字符串格式如下
 * <li>第一名：学生姓名，分数：学生分数</li>
 */
function printFirst(rows){
    let res = '';
    let first_name = '';
    let first_score = 0;
    rows.forEach(n => {
        [nowname, nowscore] = n;
        if (Number(nowscore) >= Number(first_score)) {
            first_name = nowname;
            first_score = nowscore;
        }
    })
    res += `<li>第一名：${first_name}，分数：${first_score}</li>`;
    return res;
}

/**
 * @description 返回最后一名列表 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>最后一名：学生姓名，分数：学生分数</li>
 */
function printLast(rows){
    let res = '';
    let last_name = '';
    let last_score = 100;
    rows.forEach(n => {
        [nowname, nowscore] = n;
        if (Number(nowscore) <= Number(last_score)) {
            last_name = nowname;
            last_score = nowscore;
        }
    })
    res += `<li>第一名：${last_name}，分数：${last_score}</li>`;
    return res;
}

/**
 * @description 返回平均分 html 字符串 
 * @param {array[][]} rows
 * * @returns {string} html
 * 返回的字符串格式如下
 * <li>平均分:平均分分数</li>
 */
function printAverage(rows){
    let res = 0;
    rows.forEach(n => {
        res += Number(n[1]);
    })
    return (res / rows.length).toFixed(2);
}
