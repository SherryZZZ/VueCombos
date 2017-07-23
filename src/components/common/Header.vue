<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="../../../static/img/logo.png" class="user-pic">
          <i>{{ username }}</i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="center">个人中心</el-dropdown-item>
          <el-dropdown-item command="settings">设置</el-dropdown-item>
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: 'Celine'
      }
    },
    methods: {
      handleCommand(command) {
        if (command == 'loginout'){
          this.$router.push('/login');
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    display: block;
    position: relative;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    background-color: #19a97b;
    color: #fff;
  }
  .header .logo{
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 70px;
    text-align: center;
  }
  .user-info{
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 50px;
    height: 70px;
    font-size: 16px;
    color: #fff;
  }
  .user-info .el-dropdown-link{
    padding-top: 10px;
    height: 60px;
    cursor: pointer;
  }
  .user-info .user-pic{
    display: inline-block;
    width:60px;
    height:60px;
    margin-right:8px;
    vertical-align: middle;
  }
  .user-info i{
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
  }
  .el-dropdown-menu{
    display: block;
    padding: 5px 5px 5px 5px;
    color: #ffffff;
  }
  .el-dropdown-menu__item{
    color: #000000;
    cursor: pointer;
  }
</style>
