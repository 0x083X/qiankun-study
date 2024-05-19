<template>
  <div>
    子应用数据{{ num }}
    <button @click="add">add</button>
  </div>
</template>

<script>
import sharedModule from './shared'

export default {
  name: 'App',
  data () {
    return {
      sharedModule,
      num: sharedModule.getShared().getNum()
    }
  },
  methods: {
    add () {
      this.sharedModule.shared.add()
      this.num = this.sharedModule.getShared().getNum()
    },
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
  margin-top: 60px;
}
</style>
