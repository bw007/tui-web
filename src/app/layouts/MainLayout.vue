<script setup lang="ts">
import BaseButton from '@/shared/ui/BaseButton.vue';
import TheHeader from './TheHeader.vue';
import IconChat from '@/shared/ui/icons/IconChat.vue';
import TheFooter from './TheFooter.vue';

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