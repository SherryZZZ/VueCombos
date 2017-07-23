<template>
  <div class="wrap">
    <div class="login-wrap">
      <p class="login-title">Sign in</p>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="email">
          <el-input type="" v-model="loginForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" required>
          <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label-width="140px">
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
            callback()
        }
      };
      return {
        loginForm: {
          email:'',
          pass: ''
        },
        rules: {
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('./Welcome')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style>
  .login-wrap{
    height:auto;
    width: 400px;
    margin: 82px auto;
    padding: 20px 20px 0 0;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    background-color: #ffffff;
    overflow: hidden;
  }
  .login-title{
    text-align: center;
    height: 50px;
    line-height: 36px;
    font-size: 24px;
  }
  .login-wrap .el-input, .el-input__inner{
    width: 90%;
  }
</style>
