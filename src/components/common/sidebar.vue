<template>
  <div class="sidebar">
    <el-menu v-bind:default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router unique-opened>
      <template v-for="menu in menus">
        <template v-if="menu.submenus">
          <el-submenu v-bind:index="menu.index">
            <template slot="title"><i class="el-icon-message"></i>{{menu.title}}</template>
            <el-menu-item v-for="(submenu,i) in menu.submenus" v-bind:key="i" v-bind:index="submenu.index">{{submenu.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item v-bind:index="menu.index">{{menu.title}}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
  export default{
    data(){
        return {
            menus:[
              {
                  index:'Welcome',
                  title:'首页'
              },
              {
                  index:'1',
                  title:'表单',
                  submenus:[
                    {
                        index:'BasicForm',
                        title:'基础表单'
                    }
                  ]
              },
              {
                  index:'2',
                  title:'表格',
                  submenus:[
                    {
                        index:'BasicTable',
                        title:'表格页布局'
                    },
                    {
                        index:'VueTable',
                        title:'vue动态表格'
                    },
                    {
                      index:'VueEcharts',
                      title:'vue图表'
                    }
                  ]
              }
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
//          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
//          console.log(key, keyPath);
        }
      },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>
<style>
    .sidebar{
      display: block;
      position: absolute;
      width: 18%;
      left: 0;
      top: 70px;
      bottom: 0;

      background-color: #218464;
    }
    .el-menu, .el-submenu .el-menu{
      background-color: #218464;
    }
    .el-menu-item, .el-submenu__title{
      font-size: 18px;
      color:#000000;
    }

</style>
