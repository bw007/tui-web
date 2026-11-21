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

const emit = defineEmits<{
  (e: 'openSidebar'): void
}>()

const layoutStore = useLayoutStore()
const { menus, pageData } = storeToRefs(layoutStore)
</script>

<template>
  <header class="w-full bg-white border-b font-sf border-gray-100 sticky top-0 z-50">
    <div class="bg-surface text-navy text-[14px] border-b border-gray-100">
      <div class="container mx-auto px-4.5 h-13 flex items-center justify-between">

        <!-- xl+ da: email va tel; kichikda: hamburger -->
        <div class="flex items-center gap-6 text-[17px]">
          <!-- Email + Phone: faqat xl+ da -->
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

          <!-- Hamburger: faqat xl dan kichikda -->
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

    <div class="container mx-auto px-4.5 h-25.5 flex items-center justify-between gap-4">

      <RouterLink to="/" class="shrink-0 flex items-center">
        <img src="@/assets/logo.svg" class="w-auto" />
      </RouterLink>
      <nav class="hidden xl:flex items-center gap-4 text-[15px] font-medium text-slate">
        <div
          v-for="item in menus"
          :key="item.title"
          class="py-2"
        >
          <RouterLink
            :to="item.alias"
            class="flex items-center gap-1 font-medium hover:text-brand transition-colors"
            active-class="text-brand"
          >
            <span>{{ item.title }}</span>
            <IconDown v-if="item.children?.length" class="mx-1 transition-transform duration-200" />
          </RouterLink>
        </div>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          aria-label="Қидириш"
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
