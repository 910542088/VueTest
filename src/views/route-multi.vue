<template>
<div>
  我是嵌套路由!!!<br>
  <div id="nav">
  <router-link to="/route/message">message</router-link> |
  <router-link to="/route/news">news</router-link>
  <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: "route-multi"
}
</script>

<style scoped>

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: pink;
}

#nav a.active {
  color: lightseagreen;
}
</style>