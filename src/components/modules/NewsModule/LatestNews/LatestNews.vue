<template>
    <div class="latest-news">
        <template v-for="item in news">
            <div class="latest-news__item" :key="item.id">
                <div class="latest-news__item-title">
                    {{item.title}}
                </div>
                <div class="latest-news__item-description">
                    {{item.preview_text}}
                </div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    name: 'LatestNews',

    props: {
        count: {
            type: Number,
            default: 3,
        }
    },

    mounted() {
        this.$store.dispatch('fetchNews').then((response) => {
            let newsList = this.$store.getters.getNews
            this.news = newsList.sort(function(a,b) {
                return b.id - a.id
            }).slice(0, this.count)
        })
    },

    data() {
        return {
            news: [],
        }
    },
}
</script>