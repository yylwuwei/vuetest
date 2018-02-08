<template>
  <div class="divShowChart">
    {{ msg2 }}
  </div>
</template>

<script>
export default {
  name: 'ShowChart',
  data () {
    return {
      msg2: 'Welcome to ShowCharts page'
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
.divShowChart {
  font-weight: normal;
}
</style>
