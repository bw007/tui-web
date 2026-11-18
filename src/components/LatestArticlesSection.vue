<script setup lang="ts">
import IconCalendar from './icons/IconCalendar.vue';
import IconEye from './icons/IconEye.vue';
import BaseButton from './ui/BaseButton.vue';

interface ArticleItem {
  id: number;
  category: string;
  pages: string;
  title: string;
  doi: string;
  abstract: string;
  authors: string;
  date: string;
  views: number;
  downloads: number;
}

const articles: ArticleItem[] = [
  {
    id: 1,
    category: 'Иқтисодиёт фанлари',
    pages: '5-12 саҳифа',
    title: 'Ўзбекистон иқтисодиётида рақамли трансформация жараёнларининг ўрни',
    doi: 'https://doi.org/10.35465/ku.v16i.1254',
    abstract:
      'Мақолада Ўзбекистон Республикасида рақамли иқтисодиётни ривожлантириш масалалари, рақамли технологияларнинг иқтисодий жараёнларга таъсири таҳлил қилинган...',
    authors: 'А.Н. Қодиров, М.С. Усмонова',
    date: '21 Ноябрь 2025',
    views: 876,
    downloads: 298
  },
  {
    id: 2,
    category: 'Тарих фанлари',
    pages: '13-22 саҳифа',
    title: 'Марказий Осиё тарихида Ипак йўлининг цивилизация алоқаларидаги аҳамияти',
    doi: 'https://doi.org/10.35465/ku.v16i.1254',
    abstract:
      'Тадқиқотда Буюк Ипак йўлининг Марказий Осиё халқлари орасида маданий, иқтисодий ва сиёсий алоқаларни ривожлантиришдаги роли очиб берилган...',
    authors: 'Н.Р. Раҳимов, Д.А. Алиева',
    date: '21 Ноябрь 2025',
    views: 876,
    downloads: 298
  },
  {
    id: 3,
    category: 'Ижтимоий-гуманитар фанлар',
    pages: '23-31 саҳифа',
    title: 'Педагогик инновацияларнинг талабалар билим сифатига таъсири',
    doi: 'https://doi.org/10.35465/ku.v16i.1254',
    abstract:
      'Мақолада замонавий педагогик технологияларнинг олий таълим муассасаларида қўлланилиши ва уларнинг самарадорлиги тадқиқ қилинган...',
    authors: 'Ш.М. Юсупова, Ғ.Т. Раҳмонов',
    date: '21 Ноябрь 2025',
    views: 876,
    downloads: 298
  },
  {
    id: 4,
    category: 'Техника фанлари',
    pages: '32-40 саҳифа',
    title: 'Сунъий интеллект технологияларининг тиббиёт соҳасида қўлланилиши',
    doi: 'https://doi.org/10.35465/ku.v16i.1254',
    abstract:
      'Тадқиқот ишида машинали ўқитиш алгоритмлари ва сунъий интеллектнинг диагностика жараёнларида қўлланиши кўриб чиқилган...',
    authors: 'Р.С. Каримов, Л.Н. Ибрагимова',
    date: '21 Ноябрь 2025',
    views: 876,
    downloads: 298
  },
  {
    id: 5,
    category: 'Филология фанлари',
    pages: '41-48 саҳифа',
    title: 'Ўзбек тилининг инглиз тили билан типологик қиёси',
    doi: 'https://doi.org/10.35465/ku.v16i.1254',
    abstract:
      'Мақолада ўзбек ва инглиз тилларининг грамматик тузилиши, фонетик хусусиятлари ва лексик жиҳатлари қиёсий таҳлил қилинган...',
    authors: 'М.А. Ахмедова',
    date: '21 Ноябрь 2025',
    views: 876,
    downloads: 298
  },
  {
    id: 6,
    category: 'Табиий фанлар',
    pages: '49-57 саҳифа',
    title: 'Экологик муаммоларнинг глобал характеридаги ўзгаришлар',
    doi: 'https://doi.org/10.35465/ku.v16i.1254',
    abstract:
      'Илмий ишда иқлим ўзгариши, табиий ресурслардан фойдаланиш ва атроф-муҳитни муҳофаза қилиш масалалари кўриб чиқилган...',
    authors: 'Б.Қ. Норматов, З.С. Султонова',
    date: '21 Ноябрь 2025',
    views: 876,
    downloads: 298
  },
];
</script>

<template>
  <section class="bg-[#F9FAFB] font-sf py-25">
    <div class="container mx-auto px-4.5 flex flex-col gap-10 items-center">
      <div class="flex flex-col gap-2 text-center">
        <h2 class="text-[36px] font-semibold tracking-tight text-navy leading-tight">
          Охирги сон мақолалари
        </h2>
        <p class="text-slate text-base sm:text-lg">
          Журналнинг № 12 (2024) сонида нашр этилган илмий мақолалар
        </p>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article
          v-for="article in articles"
          :key="article.id"
          class="bg-white rounded-[10px] border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between gap-4"
        >
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-sky-100 h-7 text-blue-500 text-sm flex items-center font-medium">
                {{ article.category }}
              </span>
              <span class="text-sm text-slate-500">
                {{ article.pages }}
              </span>
            </div>

            <h3 class="text-xl max-w-xl text-dark">
              {{ article.title }}
            </h3>

            <a
              :href="article.doi"
              target="_blank"
              class="text-sm text-sky-800 hover:underline"
            >
              DOI: {{ article.doi }}
            </a>

            <p class="text-sm text-slate-600 line-clamp-3">
              {{ article.abstract }}
            </p>

            <div class="text-sm text-slate-600">
              <span>{{ article.authors }}</span>
            </div>
          </div>

          <div class="border-t border-dark/10 pt-4 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-4 text-sm text-slate-600">
              <span class="inline-flex items-center gap-2">
                <IconCalendar />
                {{ article.date }}
              </span>

              <span class="inline-flex items-center gap-2">
                <IconEye />
                {{ article.views }}
              </span>
            </div>

            <div class="flex items-center gap-2">
              <BaseButton size="md" class="px-4">
                Ўқиш
              </BaseButton>
              <BaseButton size="md" class="px-6" variant="outline">
                Юклаб олиш
              </BaseButton>
              
            </div>
          </div>
        </article>
      </div>

      <BaseButton>
        Барча мақолаларни кўриш
      </BaseButton>
    </div>
  </section>
</template>