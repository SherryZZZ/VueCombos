import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/Page',
      component: resolve => require(['../components/common/Page.vue'], resolve),
      children:[
        {
          path:'/Welcome',
          component:resolve => require(['../components/pages/Welcome.vue'], resolve)
        },
        {
          path:'/BasicForm',
          component:resolve => require(['../components/pages/BasicForm.vue'], resolve)
        },
        {
          path:'/BasicTable',
          component:resolve => require(['../components/pages/BasicTable.vue'], resolve)
        },
        {
          path:'/VueTable',
          component:resolve => require(['../components/pages/VueTable.vue'], resolve)
        },
        {
          path:'/VueEcharts',
          component:resolve => require(['../components/pages/VueEcharts.vue'], resolve)
        }
      ]
    },
    {
      path:'/login',
      component:resolve => require(['../components/pages/login.vue'], resolve)
    }
  ]
})
