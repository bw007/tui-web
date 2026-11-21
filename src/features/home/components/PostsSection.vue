<script setup lang="ts">
import BaseButton from '@/shared/ui/BaseButton.vue'
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/features/home/stores/home'
import { useLayoutStore } from '@/app/stores/layout'
import PostCard from './PostCard.vue'

const homeStore = useHomeStore()
const { posts } = storeToRefs(homeStore)
const layoutStore = useLayoutStore();
const { pageData } = storeToRefs(layoutStore)
</script>

<template>
  <section class="bg-[#F9FAFB] font-sf py-25">
    <div class="container mx-auto px-4.5 flex flex-col gap-10 items-center">
      <div class="flex flex-col gap-2 text-center">
        <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
          {{ pageData?.latest_news_article }}
        </h2>
        <p class="text-slate text-base sm:text-lg">
          {{ pageData?.latest_news_article_desc }}
        </p>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PostCard 
          v-for="post in posts" :key="post.id"
          :post="post"
          @download="homeStore.downloadPost($event)"
        />
      </div>

      <BaseButton>
        {{ $t('buttons.allArticles') }}
      </BaseButton>
    </div>
  </section>
</template>
