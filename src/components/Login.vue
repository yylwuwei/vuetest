<template>
  <div class="helloyy">
   用 户: <input type="text" v-model="usertext.name" placeholder="请输入用户名">
   <br> <br>
   密 码: <input type="password" v-model="usertext.pwd" placeholder="请输入密码">
   <br> <br>
   <button type="button" @click="login">登 录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      usertext: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    login: function () {
      fetch('http://127.0.0.1:9090/login?name=yeyulin&pwd=866')
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      this.$axiosobj.get('/api/login?name=yeyulin&pwd=866')
      .then(function (response) {
        console.log(response);
        var retvalue = response.data;
        // 检测登录的结果是否正确
        if (retvalue === 'login_ok') {
          this.$router.push('/Home');
          console.log('login success.');
        } else {
          console.log('login fail.');
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
