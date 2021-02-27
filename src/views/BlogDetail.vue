<template>
  <div>
    data中的数据为{{ message }}<br/>
    用：value展示数据：<input type="text" :value="message"><br>
    用v-model双向绑定数据：<input type="text" v-model="message"><br/>
    v-model的使用原理，用：value展示数据，在用v-on绑定input事件，用event事件中的数据来改变data中的数据<br/>
    用v-model实现原理原理：<input type="text" :value="message" @input="change">
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
  data() {
    return {
      message:"hello!"
    }
  },
  methods:{
    change(event){
      this.message = event.target.value
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

<style scoped>

</style>