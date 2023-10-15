var user = new Map([["123","123"]])


function login(){
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    if(user.get(username)==password){
        window.location.href="person.html";

    }else{
        alert("用户名密码错误");
    }
}
// 后缀为.js
// 1. 代码中使用了未定义的变量user
// 2. 注册成功后清空了邮箱输入框，但代码中没有找到定义该输入框的语句
function register(){
        var username = document.getElementById("register-username").value;
        var password = document.getElementById("register-password").value;
      
      


        user.set(username,password);
        alert("注册成功,请登录");
        document.getElementById("register-username").value="";
        document.getElementById("register-password").value="";
        document.getElementById("register-email").value="";

    

    }



