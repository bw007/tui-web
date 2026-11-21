<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/shared/ui/BaseButton.vue'
import IconChat from '@/shared/ui/icons/IconChat.vue'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import { useLayoutStore } from '../stores/layout.ts'

const { locale } = useI18n()
const layoutStore = useLayoutStore()

const fetchLayoutData = async () => {
  await Promise.allSettled([
    layoutStore.getMenu(),
    layoutStore.getPageData(),
    layoutStore.getSocials()
  ])
}

watch(locale, fetchLayoutData, { immediate: true })
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />

    <main class="flex-1">
      <RouterView />
    </main>

    <TheFooter />

    <BaseButton
      aria-label="Yordam chati"
      class="fixed bottom-5 right-5 md:bottom-12 md:right-12 w-14 h-14 rounded-full bg-brand-light flex items-center justify-center z-40 shadow-lg"
    >
      <IconChat />
    </BaseButton>
  </div>
</template>