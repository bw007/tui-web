<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconDown from '@/shared/ui/icons/IconDown.vue'
import IconMail from '@/shared/ui/icons/IconMail.vue'
import IconPhone from '@/shared/ui/icons/IconPhone.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'
import IconSearch from '@/shared/ui/icons/IconSearch.vue'
import IconMessageWhite from '@/shared/ui/icons/IconMessageWhite.vue'
import IconUser from '@/shared/ui/icons/IconUser.vue'
import IconMenuBar from '@/shared/ui/icons/IconMenuBar.vue'
import { storeToRefs } from 'pinia'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useLayoutStore } from '../stores/layout.ts'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'openSidebar'): void }>()

const activeDropdown = ref<number | null>(null)

const layoutStore = useLayoutStore()
const { menus, pageData } = storeToRefs(layoutStore)
</script>

<template>
  <header class="w-full bg-white border-b font-sf border-gray-100 sticky top-0 z-50">
    <div class="bg-surface text-navy text-[14px] border-b border-gray-100">
      <div class="container mx-auto px-4.5 h-13 flex items-center justify-between">

        <div class="flex items-center gap-6 text-[17px]">
          <a
            href="mailto:info@tiuglobal.uz"
            class="hidden xl:flex items-center gap-1.5 hover:text-brand transition-colors"
          >
            <IconMail class="text-brand shrink-0" />
            <span>{{ pageData?.email }}</span>
          </a>
          <a
            href="tel:+998712444444"
            class="hidden xl:flex items-center gap-1.5 hover:text-brand transition-colors"
          >
            <IconPhone class="text-brand shrink-0" />
            <span>{{ pageData?.phone }}</span>
          </a>

          <button
            type="button"
            aria-label="Menuni ochish"
            class="xl:hidden flex items-center justify-center hover:opacity-75 transition cursor-pointer"
            @click="emit('openSidebar')"
          >
            <IconMenuBar class="text-[#0a0e10] w-8 h-8" />
          </button>
        </div>

        <LanguageSwitcher />
      </div>
    </div>

    <div class="container mx-auto px-4.5 h-20 sm:h-25.5 flex items-center justify-between gap-4">

      <RouterLink to="/" class="shrink-0 flex items-center">
        <img src="@/assets/logo.svg" class="w-25 sm:w-auto" />
      </RouterLink>
      
      <nav class="hidden xl:flex items-center gap-4 text-[15px] font-medium text-slate">
        <div
          v-for="item in menus"
          :key="item.id"
          class="py-2 relative"
          @mouseenter="item.children?.length && (activeDropdown = item.id)"
          @mouseleave="activeDropdown = null"
        >
          <RouterLink
            :to="item.alias"
            class="flex items-center gap-1 font-medium hover:text-brand transition-colors"
            active-class="text-brand"
          >
            <span>{{ item.title }}</span>
            <IconDown
              v-if="item.children?.length"
              class="mx-1 transition-transform duration-500"
              :class="{ 'rotate-180': activeDropdown === item.id }"
            />
          </RouterLink>

          <Transition name="dropdown">
            <div
              v-if="activeDropdown === item.id && item.children?.length"
              class="absolute left-0 top-full pt-3 w-75 z-50"
            >
              <div class="bg-[#134287] rounded-lg shadow-lg px-4 py-3 flex flex-col">
                <RouterLink
                  v-for="child in item.children"
                  :key="child.id || child.alias"
                  :to="child.alias"
                  @click="activeDropdown = null"
                  class="px-1 py-1.75 text-sm text-white rounded hover:px-2 border-b border-white/10 hover:bg-brand hover:text-white/85 transition-all duration-300"
                  active-class="text-brand font-semibold"
                >
                  {{ child.title }}
                </RouterLink>
              </div>

              <div class="absolute top-1 left-6 rounded w-4 rotate-45 h-4 bg-[#134287]"></div>
            </div>
          </Transition>
        </div>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="flex items-center justify-center rounded-lg hover:opacity-75 transition cursor-pointer"
        >
          <IconSearch class="w-5 h-5" />
        </button>

        <BaseButton variant="primary">
          <IconMessageWhite class="shrink-0 mx-0.5" />
          <span class="font-semibold hidden sm:inline">{{ $t('buttons.sendIssue') }}</span>
        </BaseButton>

        <BaseButton variant="soft" aria-label="Шахсий кабинет">
          <IconUser />
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.35s ease, transform 0.4s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>