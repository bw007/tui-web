<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';
import NewsCard from './NewsCard.vue';
import { homeStore } from '@/stores/home.ts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const home = homeStore();
const { news } = storeToRefs(home);

onMounted(() => {
  home.getNews({ limit: 5, offset: 0 }).then((res) => {
    console.log(res);
  });
})
</script>

<template>
  <section class="container font-sf mx-auto px-4.5 pb-30 flex flex-col gap-10 items-center">
    <div class="flex flex-col gap-3 text-center">
      <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
        Сўнги янгиликлар
      </h2>
      <p class="text-slate text-lg">
        Университет ҳақидаги сўнги воқеалардан хабардор бўлинг
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <NewsCard
        v-for="item in news"
        :key="item.id"
        :title="item.files[0]! || ''"
        :image="item.files"
        :date="item.created_at"
        :views="item.views"
      />
    </div>

    <BaseButton>
      Барча янгиликларни кўриш
    </BaseButton>
  </section>
</template>