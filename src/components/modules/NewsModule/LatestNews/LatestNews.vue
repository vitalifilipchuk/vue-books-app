<template>
    <div class="latest-news">
        <template v-for="item in news">
            <div class="latest-news__item" :key="item.id">
                <div class="latest-news__item-title">
                    {{item.title}}
                </div>
                <div class="latest-news__date">
                    {{item.created_at | moment("DD MMM, YYYY")}}
                </div>
                <div class="latest-news__item-description">
                    {{item.preview_text}}
                </div>
                <LinkButton
                    :link="$store.getters.getRoutes.news + '/' + item.id"
                    :value="'Read More'"
                />
            </div>
        </template>
    </div>
</template>

<script>
import LinkButton from '../../../UI/buttons/LInkButton/LinkButton.vue'

export default {
    name: 'LatestNews',

    components: {
        LinkButton
    },

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

<style lang="scss">
.latest-news {
    &__item {
        padding: 10px 0;
    }

    &__item-title {
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 12px;
    }

    &__date {
        font-style: italic;
        font-size: 18px;
        margin-bottom: 12px;
    }

    &__item-description {
        font-size: 16px;
        line-height: 1.25;
        margin-bottom: 20px;
    }
}
</style>