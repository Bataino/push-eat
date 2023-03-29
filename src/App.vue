<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<script>
export default {
  components: {
    Header
  },
  computed: {
    route() {
      if (this.$route.name)
        return this.$route.name
      return ''
    }
  },
  created() {
    console.log("route2", this.$route)
    this.$store.commit('update', {
      name: "cart",
      value: JSON.parse(localStorage.getItem("cart")) ?? {}
    })
  }
}

</script>

<template>
  <div class="p-0 w-100 position-relative_" style="">
    <div class="position-relative" style="z-index:99999">
      <Header class="" v-if="!['order', 'request'].includes(route)" />
    </div>
    <RouterView />
    <div class="w-100 app _position-absolute fixed-top" style="z-index:0"></div>
  </div>
</template>

<style scoped>
.app {
  background-image: url('/images/head-overlay.png');
  background-size: 100% 100vh !important;
  background-repeat: no-repeat !important;
  min-height: 100vh
}
</style>
