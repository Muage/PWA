<template>
  <div id="main">
    <p>안녕하세요!</p>
    <p>{{ sTitle }}</p>

    <VBind />
    <VModel />
    <Computed />
    <Methods />
  </div>

  <div id="main">
    <ComponentBasic />
  </div>
</template>

<script>
import VBind from './ex04/components/VBind.vue';
import VModel from './ex04/components/VModel.vue';
import Computed from './ex04/components/Computed.vue';
import Methods from './ex04/components/Methods.vue';
import ComponentBasic from './ex05/components/ComponentBasic.vue';

export default {
  name: 'App',
  components: {
    VBind,
    VModel,
    Computed,
    Methods,
    ComponentBasic,
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