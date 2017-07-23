<template>
  <div class="page-title">
      <div class="pt-l">{{vtitle}}</div>
      <div class="pt-r">
        <span class="pt-Home"><router-link to="Welcome">首页</router-link></span>
        <span class="pt-line"> / </span>
        <span class="pt-page">{{vtitle}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    props:['vtitle']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page-title{
      display: block;
      padding: 0 18px;
      border-bottom: 1px solid #8c939d;
      margin-bottom: 8px;
      overflow: hidden;
    }
    .pt-l, .pt-r{
      height: 55px;
      line-height: 55px;
      font-size: 16px;
      color: #000000;
    }
    .pt-l{
      float: left;
      font-weight: bold;
    }
    .pt-r{
      float: right;
    }
    .pt-page{
      color: #20a0ff;
    }
</style>
