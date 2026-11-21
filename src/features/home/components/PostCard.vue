<script setup lang="ts">
import IconCalendar from '@/shared/ui/icons/IconCalendar.vue';
import type { Post } from '../types';
import IconEye from '@/shared/ui/icons/IconEye.vue';
import IconDownload from '@/shared/ui/icons/IconDownload.vue';
import BaseButton from '@/shared/ui/BaseButton.vue';

const props = defineProps<{ post: Post }>()

const emit = defineEmits<{ (e: 'download', post: Post): void }>()
</script>

<template>
  <article class="bg-white rounded-[10px] border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-2">
        <span class="px-3 py-1 rounded-full bg-sky-100 h-7 text-blue-500 text-sm flex items-center font-medium">
          {{ post.category?.title }}
        </span>
        <span class="text-sm text-slate-500">
          {{ post.page }}
        </span>
      </div>

      <h3 class="text-xl max-w-xl text-dark line-clamp-2">
        {{ post.title }}
      </h3>

      <a :href="post.issue?.title" target="_blank" class="text-sm text-sky-800 hover:underline">
        DOI: {{ post.alias }}
      </a>

      <p v-html="post.content" class="text-sm text-slate-600 line-clamp-2"></p>

      <div class="text-sm text-slate-600">
        <span>{{post.authors?.map(a => a.title).join(', ')}}</span>
      </div>
    </div>

    <div class="border-t border-dark/10 pt-4 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-4 text-sm text-slate-600">
        <span class="inline-flex items-center gap-2">
          <IconCalendar />
          {{ post.created_at }}
        </span>

        <span class="inline-flex items-center gap-2">
          <IconEye />
          {{ post.views }}
        </span>

        <span class="inline-flex items-center gap-2">
          <IconDownload />
          {{ post.download }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <a :href="post.files" target="_blank" rel="noopener noreferrer">
          <BaseButton size="md" class="px-4">
            {{ $t('buttons.read') }}
          </BaseButton>
        </a>
        <BaseButton @click="emit('download', post)" size="md" class="px-6" variant="outline">
          {{ $t('buttons.download') }}
        </BaseButton>

      </div>
    </div>
  </article>
</template>
