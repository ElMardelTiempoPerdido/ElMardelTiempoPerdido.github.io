const AV_ = require('leancloud-storage');
AV_.init({
    appId: "C9JfKJx8EJf4I21wopy4qL9R-MdYXbMMI",
    appKey: "ubwaiE4zu6CljXl4otvnKzkJ",
    serverURL: "https://c9jfkjx8.api.lncldglobal.com"
  });
global.window.AV = AV_;
global.window.sendQuestion=()=> {
    const { Query, User } = AV;
    var questext = document.querySelectorAll('textarea');
    if (questext[0].value == '') {
            alert('请输入提问内容')
    } 
    else {
        //console.log(questext.value)
        var TestObject_=AV.Object.extend('box_data');
        var tt=new TestObject_();
        tt.save({
                question_text: questext[0].value,
                email: questext[1].value
        })

        alert('问题发送成功！')
    }
 
}
