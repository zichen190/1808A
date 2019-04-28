<template>
  <div id="h-box">
    <h1>elm后台管理系统</h1>
    <div id="h-k">
       <input type="text"  placeholder="用户名"/>
       <input type="text" placeholder="密码" />
       <br/>
       <button>登陆</button>
       <div id="h-d">
         <div>温馨提示：</div>
         <div>未登陆过的新用户，自动注册</div>
         <div>注册过的用户可凭账号密码登陆</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,body{
  width:100%;
  height:100%;
  background: #324057;
}
#h-box{
  background: #324057;
  width: 100%;
  height: 100%;
  color:white;
}
h1{
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
#h-k{
  margin: 0 auto;
  width: 380px;
  height: 340px;
  background: white;
}
input{
  border: none;
  padding: 10px;
  box-sizing: border-box;
  background: #FAFFBD;
  margin: 20px 30px; 
  width: 300px;
  height: 40px;
}
button{
  margin: 20px 30px; 
  width: 300px;
  height: 40px;
  background: lightseagreen;
  color: white;
  font-size: 22px;
  border:none;
}
#h-d{
  text-align: center;
  width: 380px;
  color: red;
  font-size: 14px;
}
</style>
