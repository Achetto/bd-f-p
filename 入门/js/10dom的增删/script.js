
//留言数据对象
const comments = [
  {
    name:'Danny',
    comment:'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    time:'Thu Jan 12 2022'
  },
  {
    name:'Jackson',
    comment:'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    time:'Thu Jan 11 2022'
  }
];

/**
 * @description 基于comments数据，完成渲染留言板渲染
 * @param {object[]} comments
 */
const renderComments = (comments) =>{
  let commentsnode = document.querySelector('#comments');
  comments.forEach(n => {
    commentsnode.insertAdjacentHTML('beforeend', `
    <hr/>
    <h4>
      <span>${n.name}</span>
      <span class="date">${n.time}</span>
    </h4>
    <p>${n.comment}</p>
    `)
  })
}

// 调用
renderComments(comments);

/**
 * @description 基于comments数据，完成添加一条留言，注意安全问题
 * @param {object[]} comments
 */
const postComment = () => {
  //  没搞懂textContent要怎么用...
  let newname = document.querySelector("#name").value;
  newname = newname.replaceAll('<h1>', ''); 
  let newcomment = document.querySelector('#comment').value;
  newcomment = newcomment.replaceAll('<strong>', '');
  console.log('newname',newname);
  comments.unshift({
    name: newname,
    comment: newcomment,
    time:'Thu Jan 12 2022'
  });
  let commentsnode = document.querySelector('#comments');
  commentsnode.innerHTML = "";
  renderComments(comments);
}


/**
 * @description 切换关闭留言和开启留言两种模式
 */
let open = true;
const toggleComment = () => {
  let namenode = document.querySelector("#name");
  let commentnode = document.querySelector('#comment');
  if (!open) {
    namenode.removeAttribute('disabled');
    commentnode.removeAttribute('disabled');
    open = !open;
    return;
  }
  if (open) {
    namenode.setAttribute('disabled','disabled');
    commentnode.setAttribute('disabled','disabled');
    open = !open;
    return;
  }
}
