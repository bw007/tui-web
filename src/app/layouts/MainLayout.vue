<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import BaseButton from '@/shared/ui/BaseButton.vue'
import IconChat from '@/shared/ui/icons/IconChat.vue'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import TheSidebar from './TheSidebar.vue'
import { useLayoutStore } from '../stores/layout.ts'
import BaseModal from '@/shared/ui/BaseModal.vue'

const { locale } = useI18n()
const layoutStore = useLayoutStore()
const { socials } = storeToRefs(layoutStore)

const sidebarOpen = ref(false)
const isAuth = ref(false);

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
    <div class="hidden lg:flex flex-col gap-1.5 fixed left-0 top-1/2 -translate-y-1/2 z-30">
      <a v-for="social in socials" :key="social.title" :href="social.options" target="_blank" :aria-label="social.title"
        class="w-11 h-11 bg-brand-light cursor-pointer hover:bg-brand rounded-r-lg flex items-center justify-center text-white transition-colors">
        <img :src="social.files[0]?.img" :alt="social.title" class="w-5 h-5 object-contain" />
      </a>
    </div>

    <TheHeader @open-sidebar="sidebarOpen = true" />

    <TheSidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />

    <main class="flex-1">
      <RouterView />
    </main>

    <TheFooter />

    <BaseButton aria-label="Yordam chati"
      class="fixed bottom-5 right-5 md:bottom-12 md:right-12 w-14 h-14 rounded-full bg-brand-light flex items-center justify-center z-40 shadow-lg">
      <IconChat />
    </BaseButton>

    <BaseModal body v-model="isAuth" :title="$t('poll.confirmTitle')">
      <p class="text-[#4A5565] text-base">
        salom
      </p>

      <template #footer="{ close }">
        
      </template>
    </BaseModal>
  </div>
</template>