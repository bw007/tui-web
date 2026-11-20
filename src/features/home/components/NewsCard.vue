<script setup lang="ts">
import IconCalendar from '@/shared/ui/icons/IconCalendar.vue'
import IconEye from '@/shared/ui/icons/IconEye.vue'

interface Props {
  title: string
  image: string
  date: string
  views: number
}

defineProps<Props>()
</script>

<template>
  <div class="group bg-[#E8ECF2] hover:bg-[#DFE5EE] transition-colors rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer">
    <div>
      <div class="w-full h-38.75 overflow-hidden bg-slate-200">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div class="p-3 pb-2">
        <h3 class="text-lg font-medium text-[#1E293B] leading-[1.35] line-clamp-3">
          {{ title }}
        </h3>
      </div>
    </div>

    <div class="px-3 pb-3.5 pt-2 flex items-center border-t border-t-brand/10 justify-between text-base text-brand">
      <span class="inline-flex items-center gap-1.5">
        <IconCalendar />
        {{ date }}
      </span>

      <span class="inline-flex items-center gap-1.5">
        <IconEye />
        {{ views }}
      </span>
    </div>
  </div>
</template>
