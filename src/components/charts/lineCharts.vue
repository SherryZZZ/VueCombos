<template>
  <IEcharts :option="line"  ></IEcharts>
</template>

<script>
  import vPageTitle from '../common/pageTitle.vue'
  import IEcharts from 'vue-echarts-v3';
  export default {
    components:{
      vPageTitle,IEcharts
    },
    data: () => ({
      line : {
        backgroundColor: '#ffffff',
        title: {
          text: '公众号新关注人数'
        },

        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['搜索','二维码','文章右上角菜单','名片分享'],
          x:'right'
        },
        grid: {
          left: '1%',
          right: '3%',
          bottom: '3%',
          containLabel: true,
          show:true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],
            axisLine:{lineStyle:{color:'#999'}},
            splitLine:{show:true,lineStyle:{color:'#ddd'}}
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLine:{lineStyle:{color:'#999'}},
            splitLine:{lineStyle:{color:'#ddd'}}

          }
        ],
        series : [
          {
            itemStyle:{normal:{ color:'#96d6e8'}},
            name:'搜索',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            itemStyle:{normal:{ color:'#e6d385'}},
            name:'二维码',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            itemStyle:{normal:{ color:'#f4abab'}},
            name:'文章右上角菜单',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            itemStyle:{normal:{ color:'#a6c733'}},
            name:'名片分享',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
          },
        ]
      }
    }),
    Mount:function () {
//      console.log(line);
    },
    methods: {
    }
  }
</script>

<style>
</style>
