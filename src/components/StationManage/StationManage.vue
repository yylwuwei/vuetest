<template>
  <div class="divStationManage">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'StationManage',
  data () {
    return {
      msg: 'Welcome to StationManage page'
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
.divStationManage {
  font-weight: normal;
    height: 500px;
}
</style>
