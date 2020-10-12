const globalConfig = {
  drawer: false,
  imgArray: [{
    url: require('../assets/banner/designers-desk-with-coffee-wireframes.jpg')
  },
  {
    url: require('../assets/banner/tech-group-meeting-flatlay.jpg')
  },
  {
    url: require('../assets/banner/b1.jpg')
  },
  {
    url: require('../assets/banner/making-a-budget-tracking-finances.jpg')
  }
  ],
  list: !localStorage.getItem('todoData')
    ? [] : JSON.parse(localStorage.getItem('todoData')),
  options: [{
    value: '0',
    label: '全部'
  },
  {
    value: '1',
    label: '完成'
  },
  {
    value: '',
    label: '未完成'
  }
  ]

}
