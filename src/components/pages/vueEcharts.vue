<template>
  <div>
    <v-PageTitle vtitle="vue图表"></v-PageTitle>
    <div class="main">
      <div class="echarts-column">
        <div class="barCharts">
          <barCharts></barCharts>
        </div>
        <div class="lineCharts">
          <lineCharts></lineCharts>
        </div>
      </div>
       <div class="pieCharts">
         <pieCharts></pieCharts>
       </div>
    </div>
  </div>
</template>

<script>
  import vPageTitle from '../common/pageTitle.vue'
  import IEcharts from 'vue-echarts-v3'
  import barCharts from '../charts/barCharts.vue'
  import lineCharts from '../charts/lineCharts.vue'
  import pieCharts from '../charts/pieCharts.vue'

  export default {
    components:{
      vPageTitle,IEcharts,barCharts,lineCharts,pieCharts
    },
    data(){
      return{
      }
    },
    beforeDestroy:function () {
//      console.log(1);
    },
    methods: {
    }
  }
</script>

<style>
  .echarts-column{
    margin-top: 20px;
    margin-bottom: 20px;
    zoom:1
  }
  .echarts-column:after{
    clear:both;
    content:'.';
    display:block;
    width: 0;
    height: 0;
    visibility:hidden;
  }
  .barCharts{
    float: left;
  }
  .lineCharts{
    float: right;
  }
  .barCharts, .lineCharts{
    width:50%;
  }
  .vue-echarts{
    height: 400px;
  }
</style>
