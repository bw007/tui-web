<script setup lang="ts">
import IconTrend from './icons/IconTrend.vue';
import BaseButton from './ui/BaseButton.vue';
import { homeStore } from '@/stores/home.ts';
import { storeToRefs } from 'pinia';

const home = homeStore();
const { categories } = storeToRefs(home);

</script>

<template>
  <section class="container font-sf mx-auto px-4.5 py-20 flex flex-col gap-10 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        Журнал йўналишлари ва бўлимлари
      </h2>
      <p class="text-slate text-lg">
        Турли фан соҳалари бўйича илмий тадқиқотларингизни нашр қилинг
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(item, idx) in categories"
        :key="idx"
        class="group bg-brand-light hover:bg-brand-light/80 transition-colors rounded-[14px] p-5 flex flex-col justify-between cursor-pointer"
      >
        <div class="flex items-start justify-between">
          <div class="w-14 h-14 rounded-[10px] bg-white/15 flex items-center justify-center text-white">
            <img :src="item.files[0]?.img" alt="">
          </div>

          <span class="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
            {{ item.posts }} мақола
          </span>
        </div>

        <div class="flex flex-col gap-2 mt-5 text-left">
          <h3 class="text-lg font-semibold text-white">
            {{ item.title }}
          </h3>
          <p class="text-base text-white/80">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>

    <BaseButton>
      Барча категорияларни кўриш
    </BaseButton>
  </section>
</template>