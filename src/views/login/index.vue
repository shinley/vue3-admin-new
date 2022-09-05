<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="longinForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon name="user" size="1.1em" />
        </span>
        <el-input
          placeholder="username"
          name="username"
          v-model="longinForm.username"
          type="text"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon name="password"></svg-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          v-model="longinForm.password"
          :type="passwordType"
        ></el-input>
        <span class="show-pwd">
          <svg-icon
            :name="passwordType === 'password' ? 'eye-close' : 'eye-open'"
            @click="switchEye"
          />
        </span>
      </el-form-item>
      <!--登录按钮-->
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30%"
        @click="handleLogin"
        :loading="loading"
        >登录</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
// 表单数据源
const longinForm = ref({
  username: 'admin',
  password: '123456',
})

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword(),
    },
  ],
})

// 处理密码框文本显示
const passwordType = ref('password')
const switchEye = () => {
  if (passwordType.value === 'password') {
    // 使用ref声明的数据， 在script中使用时， 需要加 .value 来获取具体的值,
    // 在template中使用的时候，不需要
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录
const loading = ref(false)
// 获取表单实例
const loginFormRef = ref(null)
const handleLogin = () => {
  // 进行表单校验
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    // 触发登录动作
    console.log('触发登录')
    userStore
      .login(longinForm.value)
      .then(() => {
        loading.value = false
        // 登录后的处理
        console.log('触发跳转')
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $bg;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    ::v-deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;
      background: transparent;

      .el-input__wrapper {
        width: 100%;
        background-color: transparent;
        border: none;
        box-shadow: none;
      }

      input {
        background: transparent;
        background-color: transparent;
        outline: none;
        border: 0;
        -webkit-appearance: none;
        border-radius: 5px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 45px;
        caret-color: $cursor;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
