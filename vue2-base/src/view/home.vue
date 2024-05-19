<template>
  <div>
    <div>如果数据改变代表子项目和基座共用数据</div>
    <p>主应用数据：{{ num }}</p>
    <router-link to="/app-vue">goto vue-micro </router-link>
    <router-link to="/react-micro"> goto react-micro</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'HomeVue',
    computed: {
      num () {
        return this.$store.state.count
      }
    },
    watch: {

    }
  }
</script>

<style>

 
</style>