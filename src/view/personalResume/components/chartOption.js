// const animationDuration = 6000
export default {
  title: {
    text: '技术栈'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    left: 'left',
    top: '30',
    data: ['Vue', 'JavaScript', 'CSS3', 'Scss', 'Echarts', 'Element']
  },
  grid: {
    right: '5%'
  },
  calculable: true,
  series: [
    {
      name: '技术栈',
      type: 'pie',
      roseType: 'radius',
      radius: [30, 200],
      center: ['60%', '50%'],
      data: [
        { value: 320, name: 'Vue全家桶' },
        { value: 240, name: 'JavaScript' },
        { value: 149, name: 'CSS3' },
        { value: 149, name: 'Scss' },
        { value: 100, name: 'Echarts' },
        { value: 59, name: 'Element' }
      ],
      animationEasing: 'cubicInOut',
      animationDuration: 2600
    }
  ]
}
