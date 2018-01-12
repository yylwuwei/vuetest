<template>
  <div class="helloyy">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to YYL Vue demo! hh'
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
