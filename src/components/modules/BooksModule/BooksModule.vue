<template>
    <div class="page">
        <Breadcrumb />
        <div class="page__wrapper">
            <div class="page__content">
                <route-view>
                </route-view>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../UI/templates/Breadcrumb.vue'

export default {
    name: 'BooksModule',

    components: {
        Breadcrumb,
    },

    data() {
        return {

        }
    },
}
</script>