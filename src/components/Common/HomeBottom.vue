<template>
  <div class="divHomeBottom">
    {{ msg2 }}
  </div>
</template>

<script>
export default {
  name: 'HomeBottom',
  data () {
    return {
      msg2: 'Welcome to HomeBottom page'
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
.divHomeBottom {
  font-weight: normal;
}
</style>
