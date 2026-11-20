<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import Aos from 'aos'

onMounted(() => {
  Aos.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
  })
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
