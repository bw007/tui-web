<script setup lang="ts">
import IconTrend from '@/shared/ui/icons/IconTrend.vue'

interface Props {
  title: string
  description: string
  count: number
}

defineProps<Props>()
</script>

<template>
  <div class="group bg-brand-light hover:bg-brand-light/80 transition-colors rounded-[14px] p-5 flex flex-col justify-between cursor-pointer">
    <div class="flex items-start justify-between">
      <div class="w-14 h-14 rounded-[10px] bg-white/15 flex items-center justify-center text-white">
        <IconTrend />
      </div>

      <span class="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
        {{ count }} {{ $t('article') }}
      </span>
    </div>

    <div class="flex flex-col gap-2 mt-5 text-left">
      <h3 class="text-lg font-semibold text-white">
        {{ title }}
      </h3>
      <p class="text-base text-white/80">
        {{ description }}
      </p>
    </div>
  </div>
</template>
