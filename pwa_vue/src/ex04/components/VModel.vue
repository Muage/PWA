<template>
    <div id="main">
        <p>{{ sMsg }}</p>
        <input type="text" :value="sMsg">
        <input type="text" v-model="sMsg">
    </div>
</template>
  
<script>
export default {
name: 'VModel',
data() {
    return {
        sMsg: '안녕하세요~!',
    }
}
}
</script>

<style scoped>
</style>