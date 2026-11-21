<script setup lang="ts">
import IconCalendar from '@/shared/ui/icons/IconCalendar.vue'
import IconEye from '@/shared/ui/icons/IconEye.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'

interface Props {
  category: string
  pages: string
  title: string
  doi: string
  abstract: string
  authors: string
  date: string
  views: number
  downloads: number
}

defineProps<Props>()
</script>

<template>
  <article class="bg-white rounded-[10px] border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-2">
        <span class="px-3 py-1 rounded-full bg-sky-100 h-7 text-blue-500 text-sm flex items-center font-medium">
          {{ category }}
        </span>
        <span class="text-sm text-slate-500">
          {{ pages }}
        </span>
      </div>

      <h3 class="text-xl max-w-xl text-dark">
        {{ title }}
      </h3>

      <a
        :href="doi"
        target="_blank"
        class="text-sm text-sky-800 hover:underline"
      >
        DOI: {{ doi }}
      </a>

      <p class="text-sm text-slate-600 line-clamp-3">
        {{ abstract }}
      </p>

      <div class="text-sm text-slate-600">
        <span>{{ authors }}</span>
      </div>
    </div>

    <div class="border-t border-dark/10 pt-4 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-4 text-sm text-slate-600">
        <span class="inline-flex items-center gap-2">
          <IconCalendar />
          {{ date }}
        </span>

        <span class="inline-flex items-center gap-2">
          <IconEye />
          {{ views }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <BaseButton size="md" class="px-4">
          {{ $t('buttons.read') }}
        </BaseButton>
        <BaseButton size="md" class="px-6" variant="outline">
          {{ $t('buttons.download') }}
        </BaseButton>
      </div>
    </div>
  </article>
</template>
