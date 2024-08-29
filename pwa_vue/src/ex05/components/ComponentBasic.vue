<template>
    <div id="app">
        <h1>{{ sTitle }}</h1>
        <ol>
            <FavoriteFruits
                v-for="item in aFruits"
                :key="item.id"
                :fruit="item" />
        </ol>
    </div>
</template>

<script>
import FavoriteFruits from './FavoriteFruits.vue'

export default {
    name: 'ComponentBasic',
    components: {
        FavoriteFruits
    },
    data() {
        return {
            sTitle: '좋아하는 과일!',
            aFruits: [
                { id: 0, text: '사과' },
                { id: 1, text: '오렌지' },
                { id: 2, text: '수박' },
            ],
        }
    },
}
</script>