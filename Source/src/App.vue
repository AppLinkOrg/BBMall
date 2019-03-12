<template>
<div>
  <transition name="router-slid" mode="out-in">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <transition name="router-slid" mode="out-in">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import './style/vue-transition.scss';
#app {
    width: 100%;
    height: 100%;
    & > div {
        width: 100%;
        height: 100%;
        position: relative;
    }
}
</style>
