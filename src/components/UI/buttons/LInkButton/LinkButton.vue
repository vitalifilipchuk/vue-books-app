<template>
    <transition>
        <router-link
            :to="link"
        >
            {{value}}
        </router-link>
    </transition>
</template>

<script>
export default {
    name: "LinkButton",
    
    props: {
        link: String,
        value: [String, Number],
    }
}
</script>