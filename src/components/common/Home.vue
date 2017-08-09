<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col class="logo">
        VUEADMIN
      </el-col>
      <el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
    </el-col>
  </el-row>
</template>

<script>
  
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
        width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
      }
    }
  }
</style>
