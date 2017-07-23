<template>
  <div class="welcome-wrap">
      <p class="welcome">Welcome</p>
  </div>
</template>

<script>
  export default{

  }

</script>

<style>
  .welcome-wrap{
    position: relative;
    height: 700px;
  }
  .welcome{
    position: absolute;
    top: 40%;
    left: 50%;
    margin: -150px 0 0 -300px;
    width: 600px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    font-size: 130px;
    font-weight: bold;
    color: aqua;
    text-shadow: 2px 2px 2px #FF0000;
  }
  .welcome{
    -webkit-animation:rotateIn 1s .2s ease both;
    -moz-animation:rotateIn 1s .2s ease both;}
  @-webkit-keyframes rotateIn{
    0%{-webkit-transform-origin:center center;
      -webkit-transform:rotate(-200deg);
      opacity:0}
    100%{-webkit-transform-origin:center center;
      -webkit-transform:rotate(0);
      opacity:1}
  }
  @-moz-keyframes rotateIn{
    0%{-moz-transform-origin:center center;
      -moz-transform:rotate(-200deg);
      opacity:0}
    100%{-moz-transform-origin:center center;
      -moz-transform:rotate(0);
      opacity:1}
  }
</style>
