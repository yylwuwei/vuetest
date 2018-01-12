<template>
  <div class="helloyu">
    {{ msg }}
    <br><br>
    <button type="button" @click="exit">退 出</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to home page'
    }
  },
  methods: {
    exit: function () {
      console.log('yyl exit')
      this.$router.push('/Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
