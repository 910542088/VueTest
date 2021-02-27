<template>
  <div>
    <ol>
      <li v-for="(e) in tableData" :key="e">{{e}}</li>
      <li>{{name}}</li>
    </ol>
    <input type="text" v-model="name">
  </div>
</template>
<script>
export default {
  name: "BlogEdit",
  data() {
    return {
      name:"hello",
      tableData: ['2016-05-02', '王小虎', '上海市普陀区金沙江路 1518 弄'
      ]
    }
  },
  created(){
    console.log('create')
  },
  destroyed(){
    console.log('destroy');
  }
}
</script>