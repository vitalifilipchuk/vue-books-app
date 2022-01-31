<template>
    <div class="default-layout">
        <div class="container">
            <Header />
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from '../components/UI/templates/Header.vue'

export default {
    name: 'DefaultLayout',

    components: {
        Header,
    },
}
</script>