<template>
  <div class="divSystemSet">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'SystemSet',
  data () {
    return {
      msg: 'Welcome to SystemSet page'
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
.divSystemSet {
  font-weight: normal;
  height: 500px;
}
</style>
