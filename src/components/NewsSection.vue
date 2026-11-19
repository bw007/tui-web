<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';
import NewsCard from './NewsCard.vue';
import news1 from '@/assets/img.jpg';

interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  views: number;
}

const newsList: NewsItem[] = [
  {
    id: 1,
    title: 'Бугун, 18-ноябрь – Ўзбекистон Республикаси Давлат байроғи қабул қилинган кун!',
    image: news1,
    date: '18-ноябрь, 2025',
    views: 238,
  },
  {
    id: 2,
    title: 'ТИУда “Энг фаол йил талабаси – 2025” университет босқичи бўлиб ўтди!',
    image: news1,
    date: '8 ноябрь, 2025',
    views: 456,
  },
  {
    id: 3,
    title: '"Миллий либос – миллат қиёфаси, инсон кўрки, миллий ифтихор ифодасидир!"',
    image: news1, date: '3 ноябрь, 2025',
    views: 187,
  },
  {
    id: 4,
    title: 'Ташриф расмий учрашув билан бошланди.',
    image: news1, date: '7 ноябрь, 2025',
    views: 67,
  },
  {
    id: 5,
    title: 'ТИУ профессор-ўқитувчилари халқаро мукофот билан тақдирланди',
    image: news1, date: '11 ноябрь, 2025',
    views: 123,
  },
];
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
        v-for="item in newsList"
        :key="item.id"
        :title="item.title"
        :image="item.image"
        :date="item.date"
        :views="item.views"
      />
    </div>

    <BaseButton>
      Барча янгиликларни кўриш
    </BaseButton>
  </section>
</template>