<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col class="logo" :class="isCollapse ? 'logo-collapse-width' : 'logo-width' ">
        {{ isCollapse ? '': sysName }}
      </el-col>
      <el-col :span="10">
				<div class="collapse" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
    </el-col>

    <el-col class="main">
      <aside :class="isCollapse ? 'menu-collapse' : 'menu'">
        <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <section class="content">
        <el-col :span="24">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        isCollapse: false, // 导航栏状态
        sysName: 'VUE CHART' // 系统名称
      }
    },
    methods: {
      collapse () {
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      color: #fff;
      background-color: #20a0ff;
      .logo {
        // width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
      }
      .logo-width {
        width: 230px;
      }
      .logo-collapse-width {
        width: 64px;
      }
      .collapse {
        padding: 0 23px;
        cursor: pointer;
      }
    }
    .main {
      position: absolute;
      top: 60px;
      bottom: 0;
      width: 100%;
      display: flex;
      aside {
        flex: 0 0 230px;
        .el-menu {
          height: 100%;
        }
      }
      .menu {
        flex: 0 0 230px;
      }
      .menu-collapse {
        flex: 0 0 60px;
      }
      section {
        padding: 20px;
        flex: 1;
        .content-wrapper {
          margin-top: 10px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
