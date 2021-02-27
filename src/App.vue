<template>
  <div id="app">
    <h3>Welcome！</h3>
    <!-- 父属性传递给子属性 用到了props属性，及子类定义一个属性变量，在夫组件中动态绑定其参数值 -->
     <!-- <login :counters='name' @hello='hi'></login> -->
    <div id="nav">
    <!--router-link中若是不想使用<a>标签，则用tag指定使用的其他类型即可-->
      <!--用replace禁止页面的后退-->
      <!--class样式可以在router中同一修改-->
      <router-link to="/route" tag="button" replace >route-multi</router-link> |
      <router-link to="/Blogs" tag="button" replace >Blogs</router-link> |
      <router-link to="/Login" replace>Login</router-link> |
      <router-link to="/BlogEdit" replace>BlogsEdit</router-link> |
      <!-- <router-link to="/BlogDetail" replace>BlogsDetail</router-link> | -->
      <button @click="detail">BlogsDetail</button>
    </div>
  
    <!--include属性为包含存活的vue对象，其他一律会被销毁，若是不写，则全部存活；也可以用exclude排除对象-->
    <keep-alive include="Blogs">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
//遇到需要挂载的组件，先导入，再在components中挂载，最后在template中加入对应的label，需要传递参数的时候添加props属性
import login from './views/Login'
export default {
  name: 'app',
  components:{
    login
  },
  data(){
    return{
      name: 100
    }
  },
  methods: {
    detail(){
      //replace使用时候不会后退
      this.$router.replace('/BlogDetail')
    },
    hi(item){
      console.log(item)
      this.name = item
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: pink;
}

#nav a.active {
  color: lightseagreen;
}
</style>