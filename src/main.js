// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'mint-ui/lib/style.css'
import './css/iconfont.css'
import './css/mui.min.css'
import './css/base.css'
import './css/style.css'
import VueResource from 'vue-resource'
import $ from 'jQuery'
import router from './router'
import public_m from './public_m'
import MintUI from 'mint-ui'
//-----
// Vue.filter('mySubstr',function(titleStr,num){
// 	if(titleStr.length<=num) return titleStr;
// 	else
// 		return titleStr.substr(0,num)+'......';
// })

Vue.use(MintUI)
Vue.use(public_m)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.http.options.headers = {
  'Content-Type': 'application/json; charset=UTF-8'
}
// Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
