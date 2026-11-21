<script setup lang="ts">
import IconCalendar from '@/shared/ui/icons/IconCalendar.vue'
import IconEye from '@/shared/ui/icons/IconEye.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/features/home/stores/home'
import { useLayoutStore } from '@/app/stores/layout'

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
        <article
          v-for="article in posts"
          :key="article.id"
          class="bg-white rounded-[10px] border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between gap-4"
        >
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-sky-100 h-7 text-blue-500 text-sm flex items-center font-medium">
                {{ article.category?.title }}
              </span>
              <span class="text-sm text-slate-500">
                {{ article.page }}
              </span>
            </div>

            <h3 class="text-xl max-w-xl text-dark line-clamp-2">
              {{ article.title }}
            </h3>

            <a
              :href="article.issue?.title"
              target="_blank"
              class="text-sm text-sky-800 hover:underline"
            >
              DOI: {{ article.alias }}
            </a>

            <p v-html="article.content" class="text-sm text-slate-600 line-clamp-2"></p>

            <div class="text-sm text-slate-600">
              <span>{{ article.authors?.map(a => a.title).join(', ') }}</span>
            </div>
          </div>

          <div class="border-t border-dark/10 pt-4 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-4 text-sm text-slate-600">
              <span class="inline-flex items-center gap-2">
                <IconCalendar />
                {{ article.created_at }}
              </span>

              <span class="inline-flex items-center gap-2">
                <IconEye />
                {{ article.views }}
              </span>
            </div>

            <div class="flex items-center gap-2">
              <a :href="article.files" download rel="noopener noreferrer">
                <BaseButton size="md" class="px-4">
                  {{ $t('buttons.read') }}
                </BaseButton>
              </a>
              <a :href="article.files" download target="_blank" rel="noopener noreferrer">
                <BaseButton size="md" class="px-6" variant="outline">
                  {{ $t('buttons.download') }}
                </BaseButton>
              </a>
            </div>
          </div>
        </article>
      </div>

      <BaseButton>
        {{ $t('buttons.allArticles') }}
      </BaseButton>
    </div>
  </section>
</template>
