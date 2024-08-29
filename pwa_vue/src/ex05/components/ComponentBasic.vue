<template>
    <div id="main">
        <h1>{{ sTitle }}</h1>
        <FavoriteFruits></FavoriteFruits>
        <FavoriteFruits></FavoriteFruits>
    </div>
</template>

<script>
import FavoriteFruits from './FavoriteFruits.vue'

export default {
    name: 'ComponentBasic',
    data() {
        return {
            sTitle: '안녕하세요!'
        }
    },
    components: {
        FavoriteFruits
    },
}
</script>