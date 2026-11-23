<script setup lang="ts">
import BaseButton from '@/shared/ui/BaseButton.vue'
import NewsCard from '@/features/home/components/NewsCard.vue'
import { useHomeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'
import BaseSlider from '@/shared/ui/BaseSlider.vue'

const homeStore = useHomeStore()
const { news } = storeToRefs(homeStore)
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 pb-30 flex flex-col gap-10 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        {{ $t('news.title') }}
      </h2>
      <p class="text-slate text-lg">
        {{ $t('news.subtitle') }}
      </p>
    </div>

    <div class="w-full min-w-0">
      <BaseSlider
        :items="news"
        loop
        autoplay
      >
        <template #default="{ item }">
          <NewsCard :item="item" />
        </template>
      </BaseSlider>
    </div>

    <BaseButton>
      {{ $t('buttons.allNews') }}
    </BaseButton>
  </section>
</template>
