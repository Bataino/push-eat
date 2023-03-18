<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  <div class="p-0 w-100">
      <Header class=""  v-if="!['order'].includes(this.$route.name)"/>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
