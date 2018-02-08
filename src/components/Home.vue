<template>

  <div class="helloyu">

<el-container>
  <el-header>

<el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>

  </el-header>
  <el-main>

    <v-show-value v-if="active === 'showValue'"></v-show-value>
    <v-show-chart v-if="active === 'showChart'"></v-show-chart>

  </el-main>
  <el-footer>Footer</el-footer>
</el-container>

    {{ msg }}
    <br><br>
    <button type="button" @click="exit">退 出</button>
  </div>
</template>

<script>
import VShowValue from '@/components/ShowValue'
import VShowChart from '@/components/ShowChart'

export default {
  name: 'Home',
  components: {
    'v-show-value': VShowValue, 'v-show-chart': VShowChart
  },
  data () {
    return {
      msg: 'Welcome to home page',
      active: 'showValue'
    }
  },
  methods: {
    exit: function () {
      console.log('yyl exit')
      this.$router.push('/Login')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
      if (key === '1') {
        console.log('hello1');
        this.active = 'showValue';
      } else if (key === '3') {
        console.log('hello3');
        this.active = 'showChart';
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
