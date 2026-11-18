<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconDown from './icons/IconDown.vue'
import IconMail from './icons/IconMail.vue'
import IconPhone from './icons/IconPhone.vue'
import BaseButton from './ui/BaseButton.vue'
import IconSearch from './icons/IconSearch.vue'
import IconMessageWhite from './icons/IconMessageWhite.vue'
import IconUser from './icons/IconUser.vue'

interface NavItem {
  label: string
  route: string
  hasDropdown: boolean
}

const navItems: NavItem[] = [
  {
    label: 'Журнал ҳақида',
    route: '/about',
    hasDropdown: true,
  },
  {
    label: 'Муаллифлар учун',
    route: '/authors',
    hasDropdown: true,
  },
  {
    label: 'Рецензентлар учун',
    route: '/reviewers',
    hasDropdown: true,
  },
  {
    label: 'Боғланиш',
    route: '/contact',
    hasDropdown: false,
  },
]

const languages = [
  { code: 'uz', label: 'Ўзбекча' },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
]

const selectedLang = ref(languages[0])
</script>

<template>
  <header class="w-full bg-white border-b font-sf border-gray-100 sticky -top-13 z-50">
    <div class="bg-surface text-navy text-[14px]">
      <div class="container mx-auto py-4 px-4.5 h-13 flex items-center justify-between">
        <div class="flex items-center text-[17px] gap-6">
          <a
            href="mailto:info@tiuglobal.uz"
            class="flex items-center gap-1.5 hover:text-brand transition-colors"
          >
            <IconMail class=" text-brand shrink-0" />
            <span>info@tiuglobal.uz</span>
          </a>

          <a
            href="tel:+998712444444"
            class="flex items-center gap-1.5 hover:text-brand transition-colors"
          >
            <IconPhone class="text-brand shrink-0" />
            <span>+998 71 244-44-44</span>
          </a>
        </div>

        <button
          type="button"
          class="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-white/60 transition cursor-pointer"
        >
          <img src="@/assets/flag.png" class="w-5 h-5 rounded-full shrink-0" />
          <span class="font-medium">{{ selectedLang!.label }}</span>
          <IconDown class="text-brand transition-transform duration-200" />
        </button>
      </div>
    </div>

    <div class="container mx-auto px-4.5 h-25.5 flex items-center justify-between gap-4">
      <RouterLink to="/" class="shrink-0 flex items-center">
        <img src="@/assets/logo.svg" class="w-auto" />
      </RouterLink>

      <nav class="hidden lg:flex items-center gap-4 text-[15px] font-medium text-slate">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="py-2"
        >
          <RouterLink
            :to="item.route"
            class="flex items-center gap-1 font-medium hover:text-brand transition-colors"
            active-class="text-brand"
          >
            <span>{{ item.label }}</span>
            <IconDown v-if="item.hasDropdown" class="mx-1 transition-transform duration-200" />
          </RouterLink>
        </div>
      </nav>

      <div class="flex items-center gap-3">
        <button
          variant="outline"
          aria-label="Қидириш"
          class="flex items-center mr-2 justify-center rounded-lg hover:opacity-75 transition cursor-pointer"
        >
          <IconSearch class="w-5 h-5" />
        </button>

        <BaseButton variant="primary">
          <IconMessageWhite class="shrink-0 mx-0.5" />
          <span class="font-semibold">Мақола юбориш</span>
        </BaseButton>

        <BaseButton
          variant="soft"
          aria-label="Шахсий кабинет"
        >
          <IconUser class="" />
        </BaseButton>
      </div>
    </div>
  </header>
</template>