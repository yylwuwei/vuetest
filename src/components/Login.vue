<template>
  <div class="helloyy">
   用 户: <input type="text" v-model="usertext.name" placeholder="请输入用户名">
   <br> <br>
   密 码: <input type="password" v-model="usertext.pwd" placeholder="请输入密码">
   <br> <br>
   <button type="button" @click="login2">登 录</button>
  </div>
</template>

<script>
function checkLogin () {
  var p = new Promise(function (resolve, reject) {
    fetch('http://127.0.0.1:9090/login?name=yeyulin&pwd=866')
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var retvalue = data;
        // 检测登录的结果是否正确
        if (retvalue === 'login_ok') {
          console.log('login success.');
          resolve(retvalue);
        } else {
          console.log('login fail.');
          reject(new Error('login is err.'));
        }
      })
  })
  return p;
}
function getNumber () {
  var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var num = 9;
      if (num <= 5) {
        resolve('resolve_param');
      } else {
        reject(new Error('num is too big.'));
      }
    }, 2000);
  });
  return p;
}
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
    login2: function () {
      checkLogin()
      .then(function (data) {
        console.log(data);
        this.$router.push('/Home');
      }.bind(this))
      .catch(function (reason) {
        console.log(reason);
      })
    },
    login: function () {
      getNumber()
      .then(function (data) {
        console.log('resolved');
        console.log(data);
      })
      .catch(function (reason) {
        console.log('rejected');
        console.log(reason);
      })
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