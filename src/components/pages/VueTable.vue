<template>
  <div class="main vueTable">
    <v-PageTitle vtitle="VResource加载动态数据"></v-PageTitle>
    <div class="main-header">
        <p class="search-title"><i class="el-icon-search"></i>条件查询</p>
        <el-input placeholder="请输入内容" v-model="input">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="影片名" value="1"></el-option>
            <el-option label="导演" value="2"></el-option>
            <el-option label="主演" value="3"></el-option>
            <el-option label="影片类型" value="4"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
    </div>
    <div class="table">
      <el-table :data="rankList" border style="width: 100%">
          <el-table-column label="影片名" width="200">
            <template scope="scope">
              <a v-bind:href="scope.row.alt" target="_blank" style="margin-left: 10px">{{ scope.row.title }}</a>
            </template>
          </el-table-column>
          <el-table-column label="导演" width="200">
            <template scope="scope">
              <span v-for="director in scope.row.directors" style="margin-left: 10px">{{ director.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="主演" width="400">
            <template scope="scope">
              <span v-for="cast in scope.row.casts" style="margin-left: 10px">{{ cast.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="类型" width="200">
            <template scope="scope">
              <span v-for="genre in scope.row.genres" style="margin-left: 10px">{{ genre }}</span>
            </template>
          </el-table-column>
          <el-table-column label="上映时间" width="100">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.year }}</span>
            </template>
          </el-table-column>
          <el-table-column label="评分" width="100">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.rating.average }}</span>
            </template>
          </el-table-column>

      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="currentPage" :page-sizes="[6, 12, 20]"
                     :page-size="12"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="25">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import vPageTitle from '../common/pageTitle.vue'
  export default {
    components:{
      vPageTitle
    },
    data(){
      return{
          rankList:[],
          currentPage:1,
          select:'',
          input:''
      }
    },
    mounted:function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}).then(function(response) {
        // 这里是处理正确的回调
        this.rankList = response.data.subjects;
      }, function(response) {
        // 这里是处理错误的回调
//        console.log(response)
      });
    },
    methods: {
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
      }
    }
  }
</script>

<style>
  .vueTable .main-header{
    padding-left: 20px;
    margin-bottom: 20px;
  }
  .vueTable .search-title{
    margin-bottom: 10px;
  }
  .vueTable .table{
    padding-left: 20px;
    margin-bottom: 15px;
  }
  .vueTable .main-header .el-input .el-select .el-input__inner{
    width: 110px;
  }
  .vueTable .table .el-pagination{
    float: right;
  }
</style>
