<template>
    <div id="main">
        <p>원본 문장: "{{ sOriginalMessage }}"</p>
        <p>대문자로 변환된 문장: "{{ fnUpperCaseMsg }}"</p>
    </div>
</template>
  
<script>
export default {
    name: 'Computed',
    data() {
        return {
            sHi: 'Hi!',
            sOriginalMessage: 'how are you?',
        }
    },
    computed: {
        fnUpperCaseMsg: function() {
            // return this.sOriginalMessage.toUpperCase()
            return this.sOriginalMessage + this.sHi
        }
    }
}
</script>

<style scoped>
</style>