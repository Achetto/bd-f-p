    //利用通过 Object.defineProperty()来实现简易的双向数据绑定 
    //创建person对象 
    var person = { name: '' } 
    let input = document.querySelector('.name');
    
    // 修改person对象中的name的值为输入框中的值
    input.addEventListener('input', function(e){
      person.name = e.target.value;
    });

    // 这里实现双向绑定，监听name值变化，input也跟着变化
    Object.defineProperty(person, 'name', {
      set: (newvalue) => {
        person[name] = newvalue;
        input.value = person[name];
      }
    })

    // 按钮事件 修改person对象中的name的值为rose
    function changeInput() { 
      person.name = 'rose';
    }