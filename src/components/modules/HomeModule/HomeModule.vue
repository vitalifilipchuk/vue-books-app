<template>
  <div class="page">
    <div class="page__wrapper">
      <div class="page__content">
        <LatestNews

        />
      </div>
      <div class="sidebar">

      </div>
    </div>
  </div>
</template>

<script>
import LatestNews from '../NewsModule/LatestNews/LatestNews.vue'

export default {
  name: 'HomeModule',

  components: {
    LatestNews,
  },

  data() {
    return {}
  },
}
</script>