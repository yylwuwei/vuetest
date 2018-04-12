<template>
  <div class="helloyy">
   用 户: <input type="text" v-model="usertext.username" placeholder="请输入用户名">
   <br> <br>
   密 码: <input type="password" v-model="usertext.password" placeholder="请输入密码">
   <br> <br>
   <button type="button" @click="login6">登 录</button>
   <p>gettersMsg数据目前是: {{ gettersMsg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
      var num = 2;
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
        username: 'geran',
        password: '12345678'
      }
    }
  },
  computed: {
    ...mapGetters(['gettersMsg'])
  },
  // 对应getters.技术中的gettersMsg
  // 对应 Actions中changeMsg方法|| 映射this.changeMsg() 为 this.$store.dispatch('changeMsg')
  methods: {
    ...mapActions(['changeMsg']),
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
    },
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
    login3: function () {
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
    },
    login4: function () {
      window.localStorage.username = 'wuwei';
      window.localStorage.userpwd = '123456';
      this.$router.push('/Home/StationInfo');
    },
    login5: function () {
      var username = 'wuwei';
      this.$store.commit({
        type: 'mutationsMsg',
        msg: '我是修改后的数据~~~' + username
      });
      window.localStorage.msg = this.$store.state.msg;
      this.$router.push('/Home/StationInfo');
    },
    login6: function () {
      this.$axiosobj.post('https://www.zlgcloud.com/v1/auth/login', this.usertext)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      this.$axiosobj.get('https://www.zlgcloud.com:443/v1/devices/0001?devtype=inverter')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      this.$axiosobj.get('https://www.zlgcloud.com:443/v1/devices/0001/data?devtype=inverter&starttime=15000')
      .then(function (response) {
        console.log(response);
      })
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