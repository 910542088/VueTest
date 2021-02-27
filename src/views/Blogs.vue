<style>
.change {
  background-color: #42b983;
}
</style>
<template>
  <div>
    <div v-if="tableData.length">
      <table>
        <thead>
        <tr>
          <td>data</td>
          <td>name</td>
          <td>address</td>
          <td>cash</td>
          <td>count</td>
          <td>operate</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(e,i) in tableData" :class="{change:current===i}" @click="current=i" :key='e'>
          <td>{{ e.date }}</td>
          <td>{{ e.name }}</td>
          <td>{{ e.address }}</td>
          <td>{{ e.cash|showPrice }}</td>
          <td>
            <button @click="e.count--" :disabled="e.count<=1">-</button>
            {{ e.count }}
            <button @click="e.count++">+</button>
          </td>
          <td>
            <button @click="remove(i)">remove</button>
          </td>
        </tr>
        </tbody>
        <h2>总价格：{{totalPrice}}</h2>
      </table>
    </div>
    <div v-else>购物车为空！！！</div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      current: 0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        count: 1,
        cash: 20.00
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        count: 1,
        cash: 40.00
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        count: 1,
        cash: 60.00
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        count: 1,
        cash: 80.00
      }]
    }
  },
  methods: {
    //用方法来返回价格的形式
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);
    },
    remove(index){
      this.tableData.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      // let total=0;
      // for(let i in this.tableData){
      //   total+=this.tableData[i].cash*this.tableData[i].count
      // }
      // return total

      // pre相当于上一次的参数，默认值可以设置，即为function后面的数字
      // return this.tableData.reduce(function (pre,n){
      //   return pre+n.cash * n.count
      // },0)
      return this.tableData.reduce((pre,n) => pre+n.cash * n.count,0)
    }
  },
  //过滤器，用来格式化数据之类的功能
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
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