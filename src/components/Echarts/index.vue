<template>
  <div></div>
</template>

<script>
export default {
  name: 'Echart',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    initEchart (option) {
      let Echart = this.$echarts.init(this.$el)
      Echart.setOption(option)
    }
  },
  mounted () {
    this.initEchart(this.option)
  }
}
</script>
