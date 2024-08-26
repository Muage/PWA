<template>
  <div id="main">
    <p>안녕하세요!</p>
    <p>{{ sTitle }}</p>

    <vBind />
    <vModel />
  </div>
</template>

<script>
import vBind from './components/vBind.vue';
import vModel from './components/vModel.vue';

export default {
  name: 'App',
  components: {
    vBind,
    vModel,
  },
  data() {
    return {
      sTitle: '안녕하세요~'
    }
  }
}
</script>

<style>
</style>