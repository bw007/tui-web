<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';
import { homeStore } from '@/stores/home.ts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const home = homeStore();
const { partners } = storeToRefs(home);

onMounted(() => {
  home.getPartners().then((res) => {
    console.log(res);
  });
})
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 pb-30 flex flex-col gap-8 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        Ҳамкорлар
      </h2>
      <p class="text-slate text-lg">
        Биз етакчи илмий ва таълим муассасалари билан ҳамкорлик қиламиз
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div v-for="item in partners" :key="item.id" class="flex bg-white border border-[#E5E7EB] rounded-[10px] p-3 justify-center items-center cursor-pointer hover:bg-amber-50/20">
        <img :src="item.files[0]?.img" :alt="item.title" class="object-contain" />
      </div>
    </div>

    <BaseButton>
      Ҳамкор бўлиш
    </BaseButton>
  </section>
</template>