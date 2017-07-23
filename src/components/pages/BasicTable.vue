<template>
  <div class="main basicTable">
      <v-PageTitle vtitle="表格页布局"></v-PageTitle>
      <div class="main-header">
        <p class="search-title"><i class="el-icon-search"></i>条件查询</p>
        <el-row :gutter="20">
          <el-col :span="5">
            <el-date-picker v-model="date" type="daterange" placeholder="日期范围"></el-date-picker>
          </el-col>
          <el-col :span="10">
            <el-input placeholder="请输入内容" v-model="input">
              <el-select v-model="select2" slot="prepend" placeholder="请选择">
                <el-option label="订单号" value="1"></el-option>
                <el-option label="姓名" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="9">
            <el-select v-model="select1" placeholder="订单状态">
              <el-option label="处理中" value="1"></el-option>
              <el-option label="待处理" value="2"></el-option>
              <el-option label="已完成" value="3"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="table">
          <el-table :data="tableList" border style="width: 100%">
            <el-table-column label="日期" width="180">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="订单号" width="180">
            <template scope="scope">
              <el-icon name="number"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
          </el-table-column>
            <el-table-column label="客户姓名" width="180">
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag>{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
            <el-table-column label="状态" width="180">
            <template scope="scope">
              <el-icon name="menu"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.status }}</span>
            </template>
          </el-table-column>
            <el-table-column label="操作">
            <template scope="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="open2">删除</el-button>
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
          date:'',
          tableList:[
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1517 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1516 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1517 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1516 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1517 弄'
            },
            {
              date: '2016-05-02',
              id:'1736573599',
              name: '王小虎',
              status: '处理中',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ],
          currentPage: 1,
          input:'',
          select1:'',
          select2:''
        }
    },
    methods: {
      open2() {
        this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSizeChange(val) {
//        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style>
  .basicTable.main{
    height: 700px;
  }
  .basicTable .main-header{
    margin-bottom: 10px;
    font-size: 14px;
  }
  .basicTable .main-header .search-title{
    padding-left: 8px;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
  }
  .basicTable .main-header .el-row{
    padding-left: 18px;
  }
  .basicTable .main-header .el-select .el-input {
    width: 110px;
  }
  .basicTable .table .el-pagination{
    float: right;
  }
</style>
