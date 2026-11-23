<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import IconMail from '@/shared/ui/icons/IconMail.vue'
import IconPhone from '@/shared/ui/icons/IconPhone.vue'
import IconLocation from '@/shared/ui/icons/IconLocation.vue'
import { useLayoutStore } from '../stores/layout'

const layoutStore = useLayoutStore()
const { pageData, menus, socials } = storeToRefs(layoutStore)

const menuGroups = computed(() =>
  menus.value.filter((item) => item.children && item.children.length > 0)
)

const singleMenus = computed(() =>
  menus.value.filter((item) => !item.children || item.children.length === 0)
)
</script>

<template>
  <footer class="bg-navy font-sf text-white">
    <div
      class="container mx-auto px-4.5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-between gap-x-8 gap-y-10 2xl:grid-cols-[auto_auto_auto_auto_minmax(280px,360px)] 2xl:justify-between">
      <div v-for="group in menuGroups" :key="group.id" class="w-full">
        <h4 class="text-brand-accent font-semibold mb-5 whitespace-nowrap">
          {{ group.title }}
        </h4>
        <ul class="flex flex-col gap-3">
          <li v-for="child in group.children" :key="child.id || child.alias">
            <RouterLink :to="child.alias"
              class="text-white/70 text-sm hover:text-white transition-colors whitespace-nowrap block"
              active-class="text-white font-medium">
              {{ child.title }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div v-if="singleMenus.length" class="w-full">
        <h4 class="text-brand-accent font-semibold mb-5 whitespace-nowrap">
          {{ $t('footer.sections') }}
        </h4>
        <ul class="flex flex-col gap-3">
          <li v-for="item in singleMenus" :key="item.id">
            <RouterLink :to="item.alias"
              class="text-white/70 text-sm hover:text-white transition-colors whitespace-nowrap block"
              active-class="text-white font-medium">
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="sm:col-span-2 lg:col-span-4 pt-8 border-t border-white/10 2xl:col-span-1 2xl:pt-0 2xl:border-t-0">
        <h4 class="text-brand-accent font-semibold mb-5 whitespace-nowrap">
          {{ $t('footer.contacts') }}
        </h4>

        <div
          class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 2xl:flex-col 2xl:items-start 2xl:justify-start 2xl:gap-3.5">
          <div
            class="flex flex-col sm:flex-row sm:flex-wrap lg:items-center gap-3.5 sm:gap-x-8 sm:gap-y-3.5 2xl:flex-col 2xl:flex-nowrap 2xl:items-start 2xl:gap-3.5">
            <p v-if="pageData?.address" class="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
              <IconLocation class="shrink-0 mt-0.5" />
              <span>{{ pageData.address }}</span>
            </p>

            <a v-if="pageData?.phone" :href="`tel:${pageData.phone.replace(/[^\d+]/g, '')}`"
              class="flex items-center gap-2.5 text-white/70 text-sm hover:text-white transition-colors whitespace-nowrap">
              <IconPhone class="shrink-0" />
              <span>{{ pageData.phone }}</span>
            </a>

            <a v-if="pageData?.email" :href="`mailto:${pageData.email}`"
              class="flex items-center gap-2.5 text-white/70 text-sm hover:text-white transition-colors whitespace-nowrap">
              <IconMail class="shrink-0" />
              <span>{{ pageData.email }}</span>
            </a>
          </div>

          <div v-if="socials.length" class="flex items-center gap-3 shrink-0 2xl:mt-2">
            <a v-for="social in socials" :key="social.title" :href="social.options" target="_blank"
              rel="noopener noreferrer" :aria-label="social.title"
              class="w-10 h-10 p-2 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
              <img :src="social.files[0]?.img" :alt="social.title" class="w-4 h-4 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div
        class="container mx-auto px-4.5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
        <span>{{ pageData?.footer_rights }}</span>
        <div class="flex items-center gap-2 whitespace-nowrap">
          <span>{{ $t('footer.developer') }}:</span>
          <a href="https://osg.uz" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
            Online Service Group
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>