<template>
<li>{{ fruit.text }}</li>
</template>

<script>
export default {
    name: 'FavoriteFruits',
    props: ['fruit'],
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