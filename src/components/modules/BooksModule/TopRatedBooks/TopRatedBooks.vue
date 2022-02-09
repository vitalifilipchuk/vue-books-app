<template>
    <div class="top-books">
        <template v-for="item in books">
            <div class="top-books__item" :key="item.id">
                <div class="top-books__item-title">
                    {{item.title}}
                </div>
                <div class="top-books__item-description">
                    {{item.preview_text}}
                </div>
                <LinkButton
                    :link="$store.getters.getRoutes.news + '/' + item.id"
                    :value="'View'"
                />
            </div>
        </template>
    </div>
</template>

<script>
import LinkButton from '../../../UI/buttons/LInkButton/LinkButton.vue'

export default {
    name: 'TopRatedBooks',

    components: {
        LinkButton
    },

    props: {
        count: {
            type: Number,
            default: 5,
        }
    },

    mounted() {
        this.$store.dispatch('fetchBooks').then((response) => {
            let booksList = this.$store.getters.getNews
            this.books = booksList.sort(function(a,b) {
                return b.id - a.id
            }).slice(0, this.count)
        })
    },

    data() {
        return {
            books: [],
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