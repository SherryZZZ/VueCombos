<template>
  <div class="main basicForm">

    <el-form :model="goodsForm" ref="goodsForm" label-width="100px" class="demo-goodsForm">
      <el-form-item label="商品名称" prop="name" required>
        <el-input v-model="goodsForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="category" required>
        <el-cascader
          :options="options2"
          @active-item-change="handleItemChange"
          :props="props"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="商品活动" prop="activity" required>
        <el-radio-group v-model="goodsForm.activity">
          <el-radio label="精品"></el-radio>
          <el-radio label="热销"></el-radio>
          <el-radio label="新品"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否启用" prop="status" required>
        <el-switch on-text="" off-text="" v-model="goodsForm.status"></el-switch>
      </el-form-item>
      <el-form-item label="创建时间" required>
        <el-date-picker v-model="goodsForm.value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="数量" prop="amount" required>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
      </el-form-item>
      <el-form-item label="商品备注" prop="remark">
        <el-input type="textarea" v-model="goodsForm.remark"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" prop="pic">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label-width="100px">
        <el-button type="primary" @click="submitForm('goodsForm')">立即创建</el-button>
        <el-button @click="resetForm('goodsForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num1:1,
        // 上传图片
        fileList2: [
            {
                name: 'foods.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            },
            {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }
        ],
        goodsForm: {
          name: '',
          value1:'',
          activity:'',
          status: false,
          type: [],
          resource: '',
          remark: ''
        },
        // 类别
        options2: [{
          label: '手机',
          products: []
        }, {
          label: '电脑',
          products: []
        }, {
          label: '耳机',
          products: []
        }],
        props: {
          value: 'label',
          children: 'products'
        },
        // 日期
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }
      };
    },
    methods: {
      handleItemChange(val) {
//        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('手机') > -1 && !this.options2[0].products.length) {
            this.options2[0].products = [
              {
                label: 'Apple'
              },
              {
                label: 'HuaWei'
              },
              {
                label: 'OPPO'
              },
              {
                label: '小米'
              },
              {
                label: '一加'
              }
            ];
          } else if (val.indexOf('电脑') > -1 && !this.options2[1].products.length) {
            this.options2[1].products = [
              {
                label: 'Apple'
              },
              {
                label: 'HP'
              },
              {
                label: 'Alienware'
              },
              {
                label: 'ThinkPad'
              },
              {
                label: '华硕'
              }
            ];
          }else (val.indexOf('耳机') > -1 && !this.options2[2].products.length)
          {
            this.options2[2].products = [
              {
                label: 'beats'
              },
              {
                label: 'EDIFIER'
              },
              {
                label: '铁三角'
              },
              {
                label: 'Bose'
              },
              {
                label: 'sony'
              }
            ];
          }
        }, 300);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
//        console.log(file, fileList);
      },
      handlePreview(file) {
//        console.log(file);
      },
      handleChange(number){

      }
    }
  }
</script>

<style>
  .basicForm{
    padding: 15px;
    width: 400px;
  }
  .basicForm .el-form-item{
    margin-bottom: 10px;
  }
  .basicForm .el-form-item__content{
    line-height: 26px;
  }
  .basicForm .el-input__inner{
    height: 26px;
  }
  .basicForm .el-input-number__decrease, .el-input-number__increase{
    line-height: 26px;
  }
</style>
