// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// ele UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// style
import './assets/sass/custom-var.scss'
import './assets/sass/jq-data-tables.min.css'
import './assets/sass/main.scss'
// thirth part js
// import VeLine from 'v-charts/lib/line.common'
// import VeMap from 'v-charts/lib/map.common'
import {peity} from "./jquery.peity.min.js"
import {datatable} from "./jquery.dataTables.min.js"
// import AFTableColumn from 'af-table-column'
// import Plugin from 'v-fit-columns'
// Vue.use(Plugin)
// Vue.use(AFTableColumn)
// Vue.component(VeLine.name, VeLine)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.directive('clickoutside', {
    bind(el, binding) {
        function handler(e) {
            if (el.contains(e.target)) {
                return false
            }
            let isReturn = false
            binding.arg.map(item => {
                if (document.querySelector('#' + item).contains(e.target)) {
                    isReturn = true
                }
            })
            if (isReturn) {
                return false
            }
            if (binding.expression) {
                binding.value(e)
            }
        }
        el._zClickOutside = handler
        document.addEventListener('click', handler)
    },
    unbind(el) {
        // 解除事件监听
        document.removeEventListener('click', el._zClickOutside)
        delete el._zClickOutside
    }
})
//peity
$('.s-line2-green').peity('line', {
	width: 154,
	height: 48,
	fill: '',
	strokeWidth: 2,
	min: 2500,
	stroke: '#2c9e67'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
