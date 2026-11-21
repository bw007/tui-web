<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import IconDown from '@/shared/ui/icons/IconDown.vue'
import { useLayoutStore } from '@/app/stores/layout'

defineProps<{ isOpen: boolean }>()

const emit = defineEmits<{ (e: 'close'): void }>()

const layoutStore = useLayoutStore()
const { menus, socials } = storeToRefs(layoutStore)
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black/40 z-40" @click="emit('close')" />
  </Transition>

  <Transition name="slide">
    <div v-if="isOpen" class="fixed top-0 left-0 h-full w-full max-w-full bg-surface z-50 flex flex-col font-sf">
      <div class="flex items-center justify-between px-5 pt-6 pb-3">
        <span class="text-[20px] font-semibold text-navy">{{ $t('sidebar.menu') }}</span>
        <button type="button"
          class="w-8 h-8 flex items-center cursor-pointer justify-center rounded-md hover:bg-gray-100 transition-colors"
          @click="emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            class="t-icon t-icon-svg t-icon-close"
            style="width:undefinedpx;height:undefinedpx;flex:undefinedpx 0 0;fill:transparent;stroke:transparent">
            <path fill="#000"
              d="M18 6a1 1 0 0 0-1.414 0L12 10.586 7.414 6A1 1 0 0 0 6 7.414L10.586 12 6 16.586A1 1 0 0 0 7.414 18L12 13.414 16.586 18A1 1 0 0 0 18 16.586L13.414 12 18 7.414A1 1 0 0 0 18 6" />
          </svg>
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto">
        <RouterLink v-for="item in menus" :key="item.id" :to="item.alias"
          class="flex items-center justify-between mx-5 ml-6 py-4 border-b border-gray-200 text-[16px] text-navy hover:text-brand transition-colors"
          active-class="text-brand" @click="emit('close')">
          <span>{{ item.title }}</span>
          <IconDown v-if="item.children?.length" class="-rotate-90 text-navy/50 w-4 h-4" />
        </RouterLink>
      </nav>

      <div class="px-4 py-6 border-t border-gray-200">
        <p class="text-[16px] font-medium text-navy mb-3.5">{{ $t('sidebar.socials') }}</p>
        <div class="flex items-center gap-2 flex-wrap">
          <a v-for="social in socials" :key="social.title" :href="social.options" target="_blank"
            :aria-label="social.title"
            class="w-10 h-10 rounded-lg bg-brand-light hover:bg-brand flex items-center justify-center text-white transition-colors cursor-pointer">
            <img :src="social.files[0]?.img" :alt="social.title" class="w-5 h-5 object-contain" />
          </a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
