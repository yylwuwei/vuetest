<template>
  <div class="divStationInfo">
    
    <!--
    {{ msg }}
    -->

    <button @click="goValue"> 数值 </button>
    <button @click="goChart"> 图表 </button>

    <VShowValue v-if="active === 'showValue'"></VShowValue>
    <VShowChart v-if="active === 'showChart'"></VShowChart>

  </div>
</template>

<script>

import VShowValue from '@/components/StationInfo/ShowValue'
import VShowChart from '@/components/StationInfo/ShowChart'

export default {
  name: 'StaionInfo',
  components: {
    VShowValue, VShowChart
  },
  data () {
    return {
      msg: 'Welcome to StationInfo page',
      active: 'showValue'
    }
  },
  methods: {
    goValue: function () {
      this.active = 'showValue';
    },
    goChart: function () {
      this.active = 'showChart';
    },
    exit: function () {
      console.log('yyl exit')
      this.$router.push('/Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divStationInfo {
  font-weight: normal;
  height: 500px;
}
</style>
