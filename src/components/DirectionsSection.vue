<script setup lang="ts">
import IconTrend from './icons/IconTrend.vue';
import BaseButton from './ui/BaseButton.vue';

interface Direction {
  title: string;
  description: string;
  count: number;
}

const directions: Direction[] = [
  {
    title: 'Хукукшунослик, сиёсатшунослик ва давлат бошқаруви',
    description: 'Ёшларни тарбиялаш, маънавият масалалари',
    count: 124,
  },
  {
    title: 'Барқарор ривожланиш ва ESC тамойиллари',
    description: 'Экологик, ижтимоий ва бошқарув масалалари',
    count: 98,
  },
  {
    title: 'Хукукшунослик, сиёсатшунослик ва давлат бошқаруви',
    description: 'Хукукий ва сиёсий тадқиқотлар',
    count: 156,
  },
  {
    title: 'Иктисодиёт, бизнес ва бошкарув',
    description: 'Иктисодий тадқиқотлар ва бизнес масалалари',
    count: 112,
  },
  {
    title: 'Филология, педагогика ва психология',
    description: 'Гуманитар фанлар йўналиши',
    count: 87,
  },
  {
    title: 'Ракамли технологиялар ва сунъий интеллект',
    description: 'Замонавий технологиялар',
    count: 112,
  },
  {
    title: 'Хисоблаш ва амалий математика',
    description: 'Математик тадқиқотлар',
    count: 93,
  },
  {
    title: 'Янги илмий асарлар тахлили',
    description: 'Илмий китоблар ва монографиялар шарҳи',
    count: 45,
  },
];
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
        v-for="(item, idx) in directions"
        :key="idx"
        class="group bg-brand-light hover:bg-brand-light/80 transition-colors rounded-[14px] p-5 flex flex-col justify-between cursor-pointer"
      >
        <div class="flex items-start justify-between">
          <div class="w-14 h-14 rounded-[10px] bg-white/15 flex items-center justify-center text-white">
            <IconTrend />
          </div>

          <span class="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
            {{ item.count }} мақола
          </span>
        </div>

        <div class="flex flex-col gap-2 mt-5 text-left">
          <h3 class="text-lg font-semibold text-white">
            {{ item.title }}
          </h3>
          <p class="text-base text-white/80">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <BaseButton>
      Барча категорияларни кўриш
    </BaseButton>
  </section>
</template>