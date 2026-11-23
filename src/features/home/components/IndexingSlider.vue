<script setup lang="ts">
import { useHomeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/app/stores/layout'
import BaseSlider from '@/shared/ui/BaseSlider.vue'

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
      <div class="w-full min-w-0">
        <BaseSlider :items="bases" pagination loop autoplay>
          <template #default="{ item }">
            <a
              :target="item.options ? '_blank' : ''"
              :href="item.options"
              class="flex bg-[#F9FAFB] border border-[#E5E7EB] rounded-[10px] p-3 justify-center items-center cursor-pointer hover:bg-amber-50/20"
            >
              <img :src="item.files[0]?.img" :alt="item.title" class="object-contain" />
            </a>    
          </template>
        </BaseSlider>
      </div>
    <p class="text-base text-dark/65">{{ pageData?.index_bases_desc2 }}</p>
  </section>
</template>
