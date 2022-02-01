<template>
    <header class="heaader">
        <div class="header__inner">
            <ul class="header__menu">

            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    text: 'Home',
                    link: this.$store.getters.getRoutes.home,
                }
            ],
        }
    },
}
</script>