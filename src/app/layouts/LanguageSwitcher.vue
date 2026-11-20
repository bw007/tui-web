<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import IconDown from '@/shared/ui/icons/IconDown.vue'

interface Lang {
  code: 'uz' | 'oz'
  label: string
}

const languages: readonly Lang[] = [
  { code: 'uz', label: 'Ўзбекча' },
  { code: 'oz', label: "O‘zbekcha" }
]

const { locale } = useI18n()
const isOpen = ref(false)

const savedCode = localStorage.getItem('lang')
const initialLang = languages.find((l) => l.code === savedCode) ?? languages[0]!
const selectedLang = ref<Lang>(initialLang)

const changeLanguage = (lang: Lang) => {
  selectedLang.value = lang
  locale.value = lang.code
  localStorage.setItem('lang', lang.code)
  isOpen.value = false
}
</script>

<template>
  <div
    class="relative inline-block"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <button
      type="button"
      class="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-white/60 transition cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <img src="@/assets/flag.png" alt="" class="w-5 h-5 rounded-full shrink-0" />
      <span class="font-medium">{{ selectedLang.label }}</span>
      <IconDown
        class="text-brand transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <div
      class="absolute right-0 top-full pt-1 w-36 z-50 transition-all duration-300 ease-out"
      :class="
        isOpen
          ? 'opacity-100 visible translate-y-0 pointer-events-auto'
          : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
      "
    >
      <ul class="bg-white rounded-md shadow-lg border border-gray-100 py-1 overflow-hidden">
        <li v-for="lang in languages" :key="lang.code">
          <button
            type="button"
            class="flex items-center gap-2 w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 transition cursor-pointer"
            :class="{ 'font-semibold text-brand': lang.code === selectedLang.code }"
            @click="changeLanguage(lang)"
          >
            <img src="@/assets/flag.png" alt="" class="w-5 h-5 rounded-full shrink-0" />
            {{ lang.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>