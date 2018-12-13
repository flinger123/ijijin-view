<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/global">全局组件</router-link> |
      <router-link to="/navigator">导航组件</router-link> |
      <router-link to="/form">表单组件</router-link> |
      <router-link to="/others">其他</router-link>
    </div>
    <transition :name="transitionName">
      <router-view  class="u-pages"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {}
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.name.length;
        const fromDepth = from.name.length;

        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    }
  }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fe5d4e;
    }
  }
}
</style>
