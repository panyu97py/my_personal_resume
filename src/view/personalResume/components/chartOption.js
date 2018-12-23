// const animationDuration = 6000
export default {
  color: ['#2C69E4', '#3DAAD7', '#60E5D7', '#845CD9', '#FF7734', '#FFAC17'],
  title: {
    text: '技术栈'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    left: 'left',
    top: '30',
    data: ['Vue全家桶', 'JavaScript', 'CSS3', 'Element', 'Echarts', 'react']
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
      radius: ['15%', '80%'],
      center: ['60%', '50%'],
      data: [
        { value: 90, name: 'Vue全家桶' },
        { value: 80, name: 'JavaScript' },
        { value: 75, name: 'CSS3' },
        { value: 80, name: 'Element' },
        { value: 70, name: 'Echarts' },
        { value: 40, name: 'react' }
      ],
      animationEasing: 'cubicInOut',
      animationDuration: 2600
    }
  ]
}
