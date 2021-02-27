<template>
  <div class="div">
    <div>{{counters}}</div>
    {{$route.params.id}}
    <el-table :data="user" style="width: 80%">
      <el-table-column
          prop="id"
          label="id"
          width="200">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="200">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          width="200">
      </el-table-column>
    </el-table>

    <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change=Page
    >
    </el-pagination>
    <div>{{count}}<br>
      <button @click="add">+</button>||
      <button @click="sub">-</button>
    </div>
    {{currentPage}}
  </div>
  
</template>

<script>
export default {
  name: "Login",
  props:{
    counters:{
      type:Number,
      default: 20
    }
  },
  //存放数据，以便axios返回数据的保存
  data() {
    return {
      user: [
        {
          id: '2016-05-02',
          name: '王小虎',
          age: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: '2016-05-02',
          name: '王小虎',
          age: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: '2016-05-02',
          name: '王小虎',
          age: '上海市普陀区金沙江路 1518 弄'
        },
      ],
      count:0,
      currentPage: 6,
      total: 100,
      pageSize: 5
    }
  },
  //JavaScript中的方法
  methods: {
    Page(currentPage) {
      
      // const _this = this ; 这种写法是需要将function中的回调函数的this指向我们vue对象，
      // cause : function(){}这种写法永远指向Window对象
      //so : 下面的回调函数中用 _this 接收数据！！！！！！

      // 这里如果想让手机访问我们的Vue实现axios的请求，不能填写localhost，需要填写本机IP地址！！！
      this.axios.get("http://localhost:8081/showAll/"+currentPage+"/"+this.pageSize+"").then( resp => {
        // _this.user = resp.data.list;  若回调函数使用function(){}这种写法，this的指向为window，所以需要重新定义this的指向
        this.user = resp.data.list;
        this.pageSize = resp.data.pageSize;
        this.total = resp.data.total;
        this.currentPage = currentPage
      });
    },
    add(item){
      this.count++;
      this.$emit('hello',this.count)
    },
    sub() {
      this.count--
    }
  },
  //相当于window.onload函数：在页面加载完毕时执行
  created() {
    this.Page(1)
  }
}
</script>

<style scoped>
.div {
  margin: 0 auto;
}
</style>