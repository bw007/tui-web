<script setup lang="ts">
import BaseButton from '@/shared/ui/BaseButton.vue'
import { useHomeStore } from '@/features/home/stores/home'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/app/stores/layout'

const homeStore = useHomeStore()
const { partners } = storeToRefs(homeStore)
const layoutStore = useLayoutStore();
const { pageData } = storeToRefs(layoutStore);
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 pb-30 flex flex-col gap-8 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        {{ pageData?.partners }}
      </h2>
      <p class="text-slate text-lg">
        {{ pageData?.partners_desc }}
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <a :target="item.options ? '_blank' : ''" :href="item.options" v-for="item in partners" :key="item.id" class="flex bg-white border border-[#E5E7EB] rounded-[10px] p-3 justify-center items-center cursor-pointer hover:bg-amber-50/20">
        <img :src="item.files[0]?.img" :alt="item.title" class="object-contain" />
      </a>
    </div>

    <BaseButton>
      {{ $t('buttons.partner') }}
    </BaseButton>
  </section>
</template>
