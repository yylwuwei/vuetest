<template>
  <div class="helloyu">

    <label class="userNameClass">{{ user }}</label> &nbsp;
    <label class="userNameClass">{{ logo }}</label> &nbsp;

    <el-container>

      <el-header>
        <v-home-top :logo="logoMsg" @transferUser="getUser"></v-home-top>
      </el-header>
      
      <el-main>
        
        <!--        
        {{ msg }}
        -->
        <router-view></router-view>

      </el-main>
      
      <el-footer>
        <v-home-bottom></v-home-bottom>
      </el-footer>

  </el-container>

 

  </div>
</template>

<script>
import VHomeTop from '@/components/Common/HomeTop'
import VHomeBottom from '@/components/Common/HomeBottom'

export default {
  name: 'Home',
  components: {
    VHomeTop, VHomeBottom
  },
  data () {
    return {
      msg: 'Welcome to home page',
      active: 'showValue',
      logoMsg: 'WiseWrong',
      user: ''
    }
  },
  mounted () {
    // this.init();
  },
  updated () {
    this.init();
  },
  methods: {
    init () {
      console.log('yyl, hello, world');
      console.log(this.$route.path);
      var strPath = this.$route.path;
      if (strPath === '/Home/') {
        this.$router.push('/Home/StationInfo');
      }
    },
    exit: function () {
      console.log('yyl exit')
      this.$router.push('/Login')
    },
    getUser (msg) {
      this.user = msg;
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