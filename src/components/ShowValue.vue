<template>
  <div class="divShowValue">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'ShowValue',
  data () {
    return {
      msg: 'Welcome to ShowValue page'
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
.divShowValue {
  font-weight: normal;
}
</style>
