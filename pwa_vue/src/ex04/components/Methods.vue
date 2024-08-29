<template>
    <div id="main">
        <p>클릭 숫자: {{ nClicks }}</p>
        <p>카운트 다운: {{ fnCounter }}</p>

        <button @click="fnIncrement">click me!</button>
    </div>
</template>
  
<script>
export default {
    name: 'Methods',
    data() {
        return {
            nClicks: 5
        }
    },
    computed: {
        fnCounter() {
            return 10 - this.nClicks
        }
    },
    methods: {
        fnIncrement() {
            this.nClicks++
        }
    }
}
</script>

<style scoped>
</style>