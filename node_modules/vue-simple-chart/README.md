# vue-simple-chart
一个基于Vue的简版chart组件，参数灵活，带已选和正确选项参数，参数个数不限。

# Install

    $ npm install vue-simple-chart

# Usage

### A basic usage
```javascript
import VueSimpleChart from 'vue-simple-chart'

### Template
```html
<vue-simple-chart :list="list" @close="onChartClose"></vue-simple-chart>
```

### Default Data
```javascript
data () {
  return {
    list: [ // 个数不限 no limit
      {name: 'a', val: 1},
      {name: 'b', val: 28},
      {name: 'c', val: 36, selected: true},
      {name: 'd', val: 0, selected: true},
      {name: 'e', val: 88, correct: true},
    ]
  }
}
```

### methods
```javascript
methods: {
  onChartClose() {
    console.log('close chart')
  }
}
```

# Example

    $ git clone https://github.com/zhishaofei3/vue-simple-chart
    $ npm install
    $ npm start

Local documentation will then be available at `http://localhost:8080`.
