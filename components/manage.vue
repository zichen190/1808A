<template>
    <div id="i-box">
       <div class="left">
        <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="首页" name="1">
  </el-collapse-item>
  <el-collapse-item  title="数据管理" name="2">
    <div @click="user">用户列表</div>
    <div>商家列表</div>
    <div>食品列表</div>
    <div>订单列表</div>
    <div>管理员列表</div>
  </el-collapse-item>
  <el-collapse-item title="添加数据" name="3">
    <div>添加商铺</div>
    <div>添加商品</div>
  </el-collapse-item>
  <el-collapse-item title="图表" name="4">
    <div>用户分布</div>
  </el-collapse-item>
  <el-collapse-item title="编辑" name="5">
    <div>文本编辑</div>
  </el-collapse-item>
  <el-collapse-item title="设置" name="6">
    <div>管理员设置</div>
  </el-collapse-item>
  <el-collapse-item title="说明" name="7">
    <div>说明</div>
  </el-collapse-item>
</el-collapse>
       </div>
       <div class="right">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/userList">数据管理</a></el-breadcrumb-item>
            
</el-breadcrumb>
       </div>
    </div>
</template>

<script>
export default {
   data() {
      return {
        // activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      user(){
         this.$router.push({path:"/userList"})
      }
    }
}
</script>

<style>
   #i-box{
      width: 100%; 
      display: flex;
   }
   .left{
       flex:2;
       width:160px;
   }
   .right{
      flex: 8;
      width: 1000px;
      height: 40px;
      line-height: 40px;
      background: lightblue;
   }
  

el-collapse-item{
    background: gray;
}
el-collapse-item>div{
    background: grey;
}

</style>
