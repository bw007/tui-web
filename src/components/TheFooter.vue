<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconMail from './icons/IconMail.vue'
import IconPhone from './icons/IconPhone.vue'
import IconLocation from './icons/IconLocation.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconX from './icons/IconX.vue'
import IconYoutube from './icons/IconYoutube.vue'

const journalLinks = [
  { label: 'Мақолаларга қўйиладиган талаблар', to: '/about/requirements' },
  { label: 'Таҳрирят жамоаси', to: '/about/editorial' },
  { label: 'Махфийлик баёноти', to: '/about/privacy' },
  { label: 'Архив сонлар', to: '/about/archive' },
]

const authorLinks = [
  { label: 'Намунавий шакл', to: '/authors/template' },
  { label: 'Тақриз олиш бўйича йўриқнома', to: '/authors/review-guide' },
  { label: 'Тўлов бўйича реквизитлар', to: '/authors/payment' },
  { label: 'Этик қоидалар', to: '/authors/ethics' },
  { label: 'Плагиат сиёсати', to: '/authors/plagiarism' },
]

const reviewerLinks = [
  { label: 'Рецензия жараёни тартиби', to: '/reviewers/process' },
  { label: 'Рецензиалаш сиёсати', to: '/reviewers/policy' },
  { label: 'Рецензент этик қоидалари', to: '/reviewers/ethics' },
  { label: 'Мотивация сиёсати', to: '/reviewers/motivation' },
]
</script>

<template>
  <footer class="bg-navy font-sf text-white">
    <div class="container mx-auto px-4.5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
        <h4 class="text-brand-accent font-semibold mb-5">Журнал ҳақида</h4>
        <ul class="flex flex-col gap-3">
          <li v-for="link in journalLinks" :key="link.label">
            <RouterLink :to="link.to" class="text-white/70 text-sm hover:text-white transition-colors">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-brand-accent font-semibold mb-5">Муаллифлар учун</h4>
        <ul class="flex flex-col gap-3">
          <li v-for="link in authorLinks" :key="link.label">
            <RouterLink :to="link.to" class="text-white/70 text-sm hover:text-white transition-colors">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-brand-accent font-semibold mb-5">Рецензентлар учун</h4>
        <ul class="flex flex-col gap-3">
          <li v-for="link in reviewerLinks" :key="link.label">
            <RouterLink :to="link.to" class="text-white/70 text-sm hover:text-white transition-colors">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-brand-accent font-semibold mb-5">Контакт маълумотлар</h4>
        <div class="flex flex-col gap-3">
          <a href="#" class="flex items-start gap-2 text-white/70 text-sm hover:text-white transition-colors">
            <IconLocation class="shrink-0 mt-0.5" />
            <span>Тошкент шаҳри, Абдулла Қодирий кўчаси, 11</span>
          </a>
          <a href="tel:+998712444444"
            class="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors">
            <IconPhone class="shrink-0" />
            <span>+998 71 244-44-44</span>
          </a>
          <a href="mailto:info@tiuglobal.uz"
            class="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors">
            <IconMail class="shrink-0" />
            <span>info@tiuglobal.uz</span>
          </a>
        </div>

        <div class="flex items-center gap-3 mt-6">
          <a href="#"
            class="w-9 h-9 p-2 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
            <IconLinkedin />
          </a>
          <a href="#"
            class="w-9 h-9 p-2 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
            <IconX />
          </a>
          <a href="#"
            class="w-9 h-9 p-2 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
            <IconYoutube />
          </a>
        </div>
      </div>

    </div>

    <div class="border-t border-white/10">
      <div
        class="container mx-auto px-4.5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
        <span>© 2024 TIU Global tadqiqotlar va innovatsiyalar ilmiy jurnali. Barcha huquqlar himoyalangan</span>
        <div class="flex items-center gap-5">
          <RouterLink to="/terms" class="hover:text-white transition-colors">Фойдаланиш шартлари</RouterLink>
          <RouterLink to="/privacy" class="hover:text-white transition-colors">Махфийлик сиёсати</RouterLink>
          <RouterLink to="/sitemap" class="hover:text-white transition-colors">Сайт харитаси</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
