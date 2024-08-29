<template>
<div>
    <div v-for="item in aFruits" class="fruit_style">
        <p>좋아하는 과일: {{ item.sFruit_name }}</p>
    </div>
    <br />
</div>
</template>

<script>
export default {
    name: 'FavoriteFruits',
    data() {
        return {
            aFruits: [
                { sFruit_name: '사과' },
                { sFruit_name: '오렌지' },
                { sFruit_name: '수박' },
            ]
        }
    },
}
</script>

<style>
.fruit_style {
    border: 1px solid #ccc;
    background-color: slategray;
    color: white;
    padding-left: 1em;
}
</style>