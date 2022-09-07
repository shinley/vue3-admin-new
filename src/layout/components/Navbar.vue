<template>
  <div class="navbar">
    <!--汉堡-->
    <hamburger class="hamburger-container" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <lang-select effect="dark" class="right-menu-item hover-effect" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="avatarSrc"></el-avatar>
          <svg-icon name="tools" size="1.1em" color="#333"></svg-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <a target="_blank" href="#">
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import hamburger from '@/components/hamburger/index.vue'
import { useUserStore } from '../../stores/user'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import LangSelect from '../../components/LangSelect/index.vue'
const store = useUserStore()

// 头像图片地址
const avatarSrc = store.userInfo.avatar

const logout = () => {
  store.logout()
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover动画
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep(.right-menu-item) {
      display: inline-block;
      padding: 0 12px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
      }
    }

    ::v-deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
        }
      }
    }
  }
  .breadcrumb-container {
    float: left;
  }
}
</style>
