<template>
  <div id="main">
    <h1 :class="sColorName + '_style'">안녕하세요!</h1>
    <input type="text" :value="sDate" />
  </div>
</template>

<script>
export default {
  name: 'VBind',
  data() {
    return {
      sDate: '올해 연도: ' + new Date().getFullYear(),
      sColorName: 'blue',
    }
  }
}
</script>

<style scoped>
.blue_style {
  color: blue;
}
</style>