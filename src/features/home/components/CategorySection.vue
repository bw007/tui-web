<script setup lang="ts">
import IconTrend from '@/shared/ui/icons/IconTrend.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'
import { useHomeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/app/stores/layout'

const homeStore = useHomeStore()
const layoutStore = useLayoutStore()
const { categories } = storeToRefs(homeStore)
const { pageData } = storeToRefs(layoutStore);
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 py-20 flex flex-col gap-10 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        {{ pageData?.juranal_cat_t }}
      </h2>
      <p class="text-slate text-lg">
        {{ pageData?.juranal_cat_desc }}
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="item in categories"
        :key="item.id"
        class="group bg-brand-light hover:bg-brand transition-colors rounded-[14px] p-5 flex flex-col justify-between cursor-pointer"
      >
        <div class="flex items-start justify-between">
          <div class="w-14 h-14 rounded-[10px] bg-white/15 flex items-center justify-center text-white">
            <IconTrend />
          </div>

          <span class="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
            {{ item.posts }} {{ $t('article') }}
          </span>
        </div>

        <div class="flex flex-col gap-2 mt-5 text-left">
          <h3 class="text-lg font-semibold text-white">
            {{ item.title }}
          </h3>
          <p class="text-base text-white/80">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>

    <BaseButton>
      {{ $t('buttons.category') }}
    </BaseButton>
  </section>
</template>
