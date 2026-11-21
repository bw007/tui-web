<script setup lang="ts">
import IconDown from '@/shared/ui/icons/IconDown.vue'
import { useHomeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/app/stores/layout'

const home = useHomeStore()
const { bases } = storeToRefs(home)
const layoutStore = useLayoutStore()
const { pageData } = storeToRefs(layoutStore);
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 py-30 flex flex-col gap-10 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        {{ pageData?.index_bases }}
      </h2>
      <p class="text-slate text-lg">
        {{ pageData?.index_bases_desc }}
      </p>
    </div>

    <div class="flex flex-col justify-between gap-6">
      <div class="relative flex justify-between items-start gap-6">
        <button class="w-10 h-10 shadow-lg absolute top-1/3 -left-16 flex items-center justify-around rounded-full bg-white cursor-pointer hover:bg-amber-50/50">
          <IconDown class="rotate-90 text-dark" />
        </button>
        <a :target="item.options ? '_blank' : ''" :href="item.options" v-for="item in bases" :key="item.id" class="flex bg-[#F9FAFB] border border-[#E5E7EB] rounded-[10px] p-3 justify-center items-center cursor-pointer hover:bg-amber-50/20">
          <img :src="item.files[0]?.img" :alt="item.title" class="object-contain" />
        </a>
        <button class="w-10 h-10 shadow-lg absolute top-1/3 -right-16 flex items-center justify-around rounded-full bg-white cursor-pointer hover:bg-amber-50/50">
          <IconDown class="-rotate-90 text-dark" />
        </button>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <span v-for="(item, index) in bases" :key="index" class="bg-border w-2 h-2 rounded-full shrink-0" :class="index === 1 ? 'w-8 bg-brand' : ''"></span>
      </div>
    </div>
    <p class="text-base text-dark/65">{{ pageData?.index_bases_desc2 }}</p>
  </section>
</template>
