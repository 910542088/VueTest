import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//完整引入elementUI
import Element from 'element-ui';
//elementUI样式文件
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from 'axios';

Vue.use(Element)
//config信息的展示，一般在发布的时候才会打开，开发阶段不会打开查看详细的信息的
Vue.config.productionTip = false
//修改Vue原型，这样就可以 "this.axios" 使用axios了
//但是不推荐这样使用，应该解耦合使用尽量封装起来使用，面向接口发送ajax请求
Vue.prototype.axios = axios

new Vue({
  // el:"#app", 源码可得，el标签会执行$mount('#app'),所以这两者是等价的
  //挂载路由
  router,
  store,
  //render相当于解析模板，或是构造element元素，可以直接传递一个component对象
  render: h => h(App),
}).$mount('#app')
