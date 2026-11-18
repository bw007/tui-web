<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import BaseButton from './components/ui/BaseButton.vue';
import IconChat from './components/icons/IconChat.vue';

</script>

<template>
  <TheHeader />

  <main class="flex-1">
    <RouterView />
    <BaseButton class="fixed bottom-12 right-12 w-14 h-14 rounded-full bg-brand-light flex items-center justify-center">
      <IconChat />
    </BaseButton>
  </main>

  <TheFooter />
</template>

<style scoped></style>
