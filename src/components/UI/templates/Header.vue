<template>
    <header class="header">
        <div class="header__inner">
            <LogoBlock
                class="header__logo"
             />

            <ul class="header-menu">
                <template v-for="(item, index) in menuItems">
                    <li class="header-menu__item" :key="index">
                        <a :href="item.link">{{ item.text }}</a>
                    </li>
                </template>
                
            </ul>
        </div>
    </header>
</template>

<script>
import LogoBlock from '../common/LogoBlock.vue'

export default {
    name: 'Header',

    components: {
        LogoBlock
    },

    mounted() {
        console.log(this.menuItems)
    },

    computed: {
        menuItems() {
            return [
                {
                    text: 'Home',
                    link: this.$store.getters.getRoutes.home,
                },
                {
                    text: 'Register',
                    link: this.$store.getters.getRoutes.registration,
                }
            ]
        } 
    },

    data() {
        return {
            
        }
    },
}
</script>