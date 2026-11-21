<script setup lang="ts">
import BaseButton from '@/shared/ui/BaseButton.vue';
</script>

<template>
  <section class="container font-sf mx-auto px-4 sm:px-6 flex flex-col pb-16 lg:pb-30 gap-8 lg:gap-10 items-center">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="bg-[#F9FAFB] lg:col-span-1 xl:col-span-2 border border-[#E5E7EB] p-4 sm:p-6 rounded-2xl">
        <form class="flex flex-col gap-5" action="">
          <div class="flex flex-col gap-2">
            <h3 class="text-[#1E2939] font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Саволларингиз борми?
            </h3>
            <p class="text-[#4A5565] text-base sm:text-[18px]">
              Саволингиз бизга юборинг биз кўриб чиқиб сизга алоқага чиқамиз
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:gap-5">
            <div class="flex flex-col col-span-2 gap-1.5">
              <label for="name" class="text-base sm:text-[18px] font-medium">ФИШ</label>
              <input type="text" id="name" placeholder="Киритинг"
                class="bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-[18px] text-[#1E2939] focus:outline-none focus:border-brand" />
            </div>

            <div class="flex flex-col col-span-2 sm:col-span-1 gap-1.5">
              <label for="phone" class="text-base sm:text-[18px] font-medium">Телефон рақам:</label>
              <input type="text" id="phone" placeholder="+998 (__) ___-__-__"
                class="bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-[18px] text-[#1E2939] focus:outline-none focus:border-brand" />
            </div>

            <div class="flex flex-col col-span-2 sm:col-span-1 gap-1.5">
              <label for="email" class="text-base sm:text-[18px] font-medium">Электрон манзил:</label>
              <input type="email" id="email" placeholder="example@email.com"
                class="bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-[18px] text-[#1E2939] focus:outline-none focus:border-brand" />
            </div>

            <div class="flex flex-col col-span-2 gap-1.5">
              <label for="message" class="text-base sm:text-[18px] font-medium">Matn:</label>
              <textarea id="message" placeholder="Савол мазмуни"
                class="bg-white border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-[18px] text-[#1E2939] focus:outline-none focus:border-brand resize-none h-28 sm:h-32"></textarea>
            </div>

            <div class="flex flex-col col-span-2 gap-1.5">
              <label for="file" class="text-base sm:text-[18px] font-medium">
                Файл:
                <input type="file" id="file" class="hidden" />
                <div
                  class="mt-1.5 text-base sm:text-[18px] text-[#6D7589] p-3.5 sm:p-4 border rounded-xl border-dashed border-[#6A7282] cursor-pointer bg-[#F2F4F8] hover:opacity-75 transition">
                  Файл бириктиринг
                </div>
              </label>
            </div>

            <div class="col-span-2">
              <BaseButton class="w-full sm:w-64">
                {{ $t('buttons.sendAppeal') }}
              </BaseButton>
            </div>
          </div>
        </form>
      </div>

      <div class="flex flex-col justify-between gap-5 bg-[#F9FAFB] border border-[#E5E7EB] p-4 sm:p-6 rounded-2xl">
        <h3 class="text-2xl sm:text-3xl text-[#1E2939] font-semibold">Сўровномалар</h3>

        <form action="" class="flex flex-col border border-[#E5E7EB] bg-white rounded-xl p-4 sm:p-5 gap-4 sm:gap-5">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg sm:text-xl leading-tight font-medium">
              Сўровнома! Сайтинг янги дизайнини қандай баҳолайсиз?
            </h4>
            <p class="text-[#4A5565] text-base sm:text-[18px]">
              Ушбу сўровнома қатнашиш доирасида бизнинг хизматларини яхшилашда бизга ёрдам берасиз
            </p>
          </div>

          <div class="w-full flex flex-col gap-2.5 sm:gap-3">
            <label
              class="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="0"
                class="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 focus:ring-brand shrink-0" />
              <span class="text-gray-800 text-base sm:text-[18px] font-medium">Жуда яхши</span>
            </label>

            <label
              class="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="1"
                class="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 focus:ring-brand shrink-0" />
              <span class="text-gray-800 text-base sm:text-[18px] font-medium">Яхши</span>
            </label>

            <label
              class="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="2"
                class="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 focus:ring-brand shrink-0" />
              <span class="text-gray-800 text-base sm:text-[18px] font-medium">Қониқарли</span>
            </label>

            <label
              class="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="3"
                class="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 focus:ring-brand shrink-0" />
              <span class="text-gray-800 text-base sm:text-[18px] font-medium">Қониқарсиз</span>
            </label>

            <label
              class="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="4"
                class="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 focus:ring-brand shrink-0" />
              <span class="text-gray-800 text-base sm:text-[18px] font-medium">Камчиликлар мавжуд</span>
            </label>
          </div>
        </form>

        <BaseButton variant="outline" class="w-full">
          <span class="text-brand">{{ $t('buttons.allSurvey') }}</span>
        </BaseButton>
      </div>
    </div>
  </section>
</template>