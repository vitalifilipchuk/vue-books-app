<template>
  <div id="app">
    <component :is="layout">

    </component>
  </div>
</template>

<script>

export default {
  name: "App",

  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout"
    },
  },

  mounted() {
    this.initAppRoutes()
  },

  methods: {
    initAppRoutes() {
      this.$store.commit('SET_ROUTES', this.routerPaths)
    }
  }
};
</script>

<style lang="scss">
  @import 'normalize-scss';
  @include normalize();

  @import './scss/main'
</style>
