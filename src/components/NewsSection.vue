<script setup lang="ts">
import IconCalendar from './icons/IconCalendar.vue';
import IconEye from './icons/IconEye.vue';
import BaseButton from './ui/BaseButton.vue';
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
      <article
        v-for="item in newsList"
        :key="item.id"
        class="group bg-[#E8ECF2] hover:bg-[#DFE5EE] transition-colors rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer"
      >
        <div>
          <div class="w-full h-38.75 overflow-hidden bg-slate-200">
            <img
              :src="item.image" :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-3 pb-2">
            <h3 class="text-lg font-medium text-[#1E293B] leading-[1.35] line-clamp-3">
              {{ item.title }}
            </h3>
          </div>
        </div>

        <div class="px-3 pb-3.5 pt-2 flex items-center border-t border-t-brand/10 justify-between text-base text-brand">
          <span class="inline-flex items-center gap-1.5">
            <IconCalendar />
            {{ item.date }}
          </span>

          <span class="inline-flex items-center gap-1.5">
            <IconEye />
            {{ item.views }}
          </span>
        </div>
      </article>
    </div>

    <BaseButton>
      Барча янгиликларни кўриш
    </BaseButton>
  </section>
</template>