<template>
  <div class="divHomeTop">
<!--    
    {{ msg2 }}
-->

        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">电站信息</el-menu-item>
          <el-menu-item index="2">电站管理</el-menu-item>
          <el-menu-item index="3">系统设置</el-menu-item>
          <input v-model="userYY" v-on:change="SetUserYY" />
          <label class="userNameClass">{{ logo }}</label> &nbsp;
          <label class="userNameClass">{{ msg66 }}</label> &nbsp;
          <label class="userNameClass">{{ gettersMsg }}</label> &nbsp;
          <button type="button" @click="exit">退 出</button>
        </el-menu>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'HomeTop',
  data () {
    return {
      msg2: 'Welcome to HomeTop page',
      userName: localStorage.username,
      userYY: 'userYY'
    }
  },
  props: ['logo'],
  computed: {
    ...mapGetters(['gettersMsg']),
    ...mapState(['msg']),
    msg66: function () {
      console.log('enter into computer msg');
      if (this.msg === '原始') {
        // this.$store.state.msg = window.localStorage.msg;
        // this.$store.commit({ type: 'mutationMsgReload' });
        this.$store.dispatch('changeMsgReload');
      }
      return this.$store.state.msg;
    }
  },
  methods: {
    ...mapActions(['changeMsgReload']),
    exit: function () {
      console.log('yyl exit')
      this.$router.push('/Login')
    },
    SetUserYY: function () {
      this.$emit('transferUser', this.userYY);
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
      if (key === '1') {
        console.log('hello1');
        this.active = 'showValue';
        this.$router.push('/Home/StationInfo');
      } else if (key === '2') {
        console.log('hello2');
        this.$router.push('/Home/StationManage');
      } else if (key === '3') {
        console.log('hello3');
        this.active = 'showChart';
        this.$router.push('/Home/SystemSet');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divHomeTop {
  font-weight: normal;
}
.userNameClass {
  font-weight: normal;
  color: #FFFFFF;
}
</style>
