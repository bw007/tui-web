<script setup lang="ts">
import BaseButton from './ui/BaseButton.vue';

</script>

<template>
  <section class="container font-sf mx-auto px-4.5 flex flex-col pb-30 gap-10 items-center">
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-[#F9FAFB] col-span-2 border border-[#E5E7EB] p-6 rounded-2xl">
        <form class="flex flex-col gap-5" action="">
          <div class="flex flex-col gap-2">
            <h3 class="text-[#1E2939] font-semibold text-4xl">Саволларингиз борми?</h3>
            <p class="text-[#4A5565] text-[18px]">Саволингиз бизга юборинг биз кўриб чиқиб сизга алоқага чиқамиз</p>
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col col-span-2 gap-1.5">
              <label for="name" class="text-[18px] font-medium">ФИШ</label>
              <input
                type="text"
                id="name"
                placeholder="Киритинг"
                class="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[18px] text-[#1E2939] focus:outline-none focus:border-brand"
              />
            </div>
            <div class="flex flex-col col-span-1 gap-1.5">
              <label for="phone" class="text-[18px] font-medium">Телефон рақам:</label>
              <input
                type="text"
                id="phone"
                placeholder="+998 (__) ___-__-__"
                class="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[18px] text-[#1E2939] focus:outline-none focus:border-brand"
              />
            </div>
            <div class="flex flex-col col-span-1 gap-1.5">
              <label for="email" class="text-[18px] font-medium">Электрон манзил:</label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                class="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[18px] text-[#1E2939] focus:outline-none focus:border-brand"
              />
            </div>
            <div class="flex flex-col col-span-2 gap-1.5">
              <label for="message" class="text-[18px] font-medium">Matn:</label>
              <textarea
                id="message"
                placeholder="Савол мазмуни"
                class="bg-white border border-[#E5E7EB] rounded-lg px-4 py-3 text-[18px] text-[#1E2939] focus:outline-none focus:border-brand resize-none h-30"
              ></textarea>
            </div>
            <div class="flex flex-col col-span-2 gap-1.5">
              <label for="file" class="text-[18px] font-medium">Файл:
                <input
                  type="file"
                  id="file"
                  class="hidden"
                />
                <div class="mt-1.5 text-[18px] text-[#6D7589] p-4 border rounded-xl border-dashed border-[#6A7282] cursor-pointer bg-[#F2F4F8] hover:opacity-75">Файл бириктиринг</div>
              </label>
            </div>
            <BaseButton class="w-64">
              Мурожаатни юбориш
            </BaseButton>
          </div>
        </form>
      </div>
      <div class="flex flex-col justify-between gap-5 bg-[#F9FAFB] border border-[#E5E7EB] p-6 rounded-2xl">
        <h3 class="text-3xl text-[#1E2939] font-semibold">Сўровномалар</h3>
        <form action="" class="flex flex-col border border-[#E5E7EB] bg-white rounded-xl p-5 gap-5">
          <div class="flex flex-col gap-2">
            <h4 class="text-xl leading-tight">Сўровнома! Сайтинг янги дизайнини қандай баҳолайсиз?</h4>
            <p class="text-[#4A5565] text-[18px]">Ушбу сўровнома қатнашиш доирасида бизнинг хизматларини яхшилашда бизга ёрдам берасиз</p>
          </div>
          <div class="w-full flex flex-col gap-3">
            <label class="flex items-center gap-3.5 p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="0" class="w-5 h-5 border-gray-300 focbrand ">
              <span class="text-gray-800 text-[18px] font-medium">Жуда яхши</span>
            </label>

            <label class="flex items-center gap-3.5 p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="1" class="w-5 h-5 border-gray-300 focus:ring-brand">
              <span class="text-gray-800 text-[18px] font-medium">Яхши</span>
            </label>

            <label class="flex items-center gap-3.5 p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="2" class="w-5 h-5 border-gray-300 focus:ring-brand">
              <span class="text-gray-800 text-[18px] font-medium">Қониқарли</span>
            </label>

            <label class="flex items-center gap-3.5 p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="3" class="w-5 h-5 border-gray-300 focus:ring-brand">
              <span class="text-gray-800 text-[18px] font-medium">Қониқарсиз</span>
            </label>

            <label class="flex items-center gap-3.5 p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5">
              <input type="radio" name="poll" value="4" class="w-5 h-5 border-gray-300 focus:ring-brand">
              <span class="text-gray-800 text-[18px] font-medium">Камчиликлар мавжуд</span>
            </label>
          </div>
        </form>
        <BaseButton variant="outline">
            <span class="text-brand">Барча сўровномаларни кўриш</span>
          </BaseButton>
      </div>
    </div>
  </section>
</template>