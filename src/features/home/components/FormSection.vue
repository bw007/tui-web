<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/shared/ui/BaseButton.vue'
import BaseInput from '@/shared/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/BaseTextarea.vue'
import BaseFileUpload from '@/shared/ui/BaseFileUpload.vue'
import BaseModal from '@/shared/ui/BaseModal.vue'
import type { Form, Polls } from '../types'
import { useHomeStore } from '../stores/home'

const { t } = useI18n()
const homeStore = useHomeStore()
const { polls } = storeToRefs(homeStore)

const formData = reactive<Form>({
  fio: '',
  phone: '',
  email: '',
  message: '',
  file: null,
})

const isSubmitting = ref(false)
const showResults = ref(false)
const selectedPoll = ref<string | null>(null)
const confirmPoll = ref(false)
const isSendingPoll = ref(false)

const pollOptions: { value: string; key: keyof Polls; label: string; barClass: string }[] = [
  { value: '1', key: 'result_1', label: 'poll.pollOptions.veryGood', barClass: 'bg-[#28A800] text-white' },
  { value: '2', key: 'result_2', label: 'poll.pollOptions.good', barClass: 'bg-[#9ED919] text-dark' },
  { value: '3', key: 'result_3', label: 'poll.pollOptions.satisfactory', barClass: 'bg-[#FBE453] text-dark' },
  { value: '4', key: 'result_4', label: 'poll.pollOptions.unsatisfactory', barClass: 'bg-[#FA8B0C] text-white' },
  { value: '5', key: 'result_5', label: 'poll.pollOptions.hasFlaws', barClass: 'bg-[#FF6900] text-white' },
]

const isFormValid = computed(() => {
  return Boolean(
    formData.fio.trim() &&
    formData.phone.trim() &&
    formData.message.trim()
  )
})

const selectedPollLabel = computed(() => {
  const item = pollOptions.find((opt) => opt.value === selectedPoll.value)
  return item ? t(item.label) : ''
})

const pollResults = computed(() => {
  const total = polls.value ? Object.values(polls.value).reduce((a, b) => a + b, 0) : 0

  return pollOptions.map((opt) => {
    const count = polls.value?.[opt.key] ?? 0
    return {
      ...opt,
      count,
      percent: total ? Math.round((count / total) * 100) : 0,
    }
  })
})

const sendFeedback = async () => {
  if (!isFormValid.value || isSubmitting.value) return

  isSubmitting.value = true
  try {
    await homeStore.sendFeedback(formData)
    Object.assign(formData, {
      fio: '',
      phone: '',
      email: '',
      message: '',
      file: null,
    })
  } finally {
    isSubmitting.value = false
  }
}

const openConfirmModal = () => {
  if (selectedPoll.value) {
    confirmPoll.value = true
  }
}

const togglePollView = async () => {
  if (!showResults.value) {
    await homeStore.getPolls()
  }
  showResults.value = !showResults.value
}

const confirmSendPoll = async () => {
  if (!selectedPoll.value || isSendingPoll.value) return

  isSendingPoll.value = true
  try {
    await homeStore.sendPoll({ option: selectedPoll.value })
    confirmPoll.value = false
    selectedPoll.value = null
    await togglePollView()
  } finally {
    isSendingPoll.value = false
  }
}
</script>

<template>
  <section class="container font-sf mx-auto px-4 sm:px-6 flex flex-col pb-16 lg:pb-30 gap-8 lg:gap-10 items-center">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="bg-[#F9FAFB] border border-[#E5E7EB] p-4 sm:p-6 rounded-2xl lg:col-span-1 xl:col-span-2">
        <form class="flex flex-col gap-5" @submit.prevent="sendFeedback">
          <div class="flex flex-col gap-2">
            <h3 class="text-[#1E2939] font-semibold text-2xl sm:text-3xl lg:text-4xl">
              {{ $t('form.title') }}
            </h3>
            <p class="text-[#4A5565] text-base sm:text-[18px]">
              {{ $t('form.subtitle') }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 sm:gap-5">
            <BaseInput
              v-model="formData.fio"
              :label="$t('form.fullName')"
              :placeholder="$t('form.enter')"
              class="col-span-2"
            />

            <BaseInput
              v-model="formData.phone"
              type="tel"
              :label="$t('form.phone')"
              placeholder="+998 (__) ___-__-__"
              class="col-span-2 sm:col-span-1"
            />

            <BaseInput
              v-model="formData.email"
              type="email"
              :label="$t('form.email')"
              placeholder="example@email.com"
              class="col-span-2 sm:col-span-1"
            />

            <BaseTextarea
              v-model="formData.message"
              :label="$t('form.message')"
              :placeholder="$t('form.messagePlaceholder')"
              class="col-span-2"
            />

            <BaseFileUpload
              v-model="formData.file"
              :label="$t('form.file')"
              :placeholder="$t('form.attachFile')"
              class="col-span-2"
            />

            <div class="col-span-2">
              <BaseButton
                type="submit"
                class="w-full sm:w-64"
                :disabled="!isFormValid || isSubmitting"
              >
                {{ $t('buttons.sendAppeal') }}
              </BaseButton>
            </div>
          </div>
        </form>
      </div>

      <div class="relative bg-[#F9FAFB] border border-[#E5E7EB] p-4 sm:p-6 rounded-2xl flex flex-col gap-5">
        <h3 class="text-2xl sm:text-3xl text-[#1E2939] font-semibold">
          {{ $t('poll.title') }}
        </h3>

        <form
          v-if="!showResults"
          @submit.prevent
          class="flex flex-col border border-[#E5E7EB] bg-white rounded-xl p-4 sm:p-5 gap-4 sm:gap-5"
        >
          <div class="flex flex-col gap-2">
            <h4 class="text-lg sm:text-xl leading-tight font-medium">
              {{ $t('poll.pollTitle') }}
            </h4>
            <p class="text-[#4A5565] text-base sm:text-[18px]">
              {{ $t('poll.pollDesc') }}
            </p>
          </div>

          <div class="w-full flex flex-col gap-2.5 sm:gap-3">
            <label
              v-for="option in pollOptions"
              :key="option.value"
              class="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition has-checked:border-brand has-checked:bg-brand-light/5"
            >
              <input
                v-model="selectedPoll"
                type="radio"
                name="poll"
                :value="option.value"
                class="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 focus:ring-brand shrink-0"
                @change="openConfirmModal"
              />
              <span class="text-gray-800 text-base sm:text-[18px] font-medium">
                {{ $t(option.label) }}
              </span>
            </label>
          </div>
        </form>

        <div
          v-else
          class="flex flex-col border border-[#E5E7EB] bg-white rounded-xl p-4 sm:p-5 gap-4"
        >
          <h4 class="text-xl sm:text-[22px] text-[#1E2939] leading-tight font-bold">
            {{ $t('poll.resultsTitle') }}
          </h4>

          <div class="flex flex-col gap-4">
            <div v-for="item in pollResults" :key="item.value" class="flex flex-col gap-2">
              <span class="text-[#1E2939] text-base sm:text-[17px] font-bold">
                {{ $t(item.label) }} - {{ item.count }}
              </span>

              <div class="w-full h-[34px] bg-[#F0F2F5] rounded-full overflow-hidden">
                <div
                  class="h-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                  :class="item.barClass"
                  :style="{ width: `${item.percent}%`, minWidth: item.percent > 0 ? '38px' : '0px' }"
                >
                  <span v-if="item.percent > 0">{{ item.percent }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BaseButton variant="outline" class="w-full" @click="togglePollView">
          <span class="text-brand">
            {{ showResults ? $t('buttons.backToVote') : $t('buttons.allPolls') }}
          </span>
        </BaseButton>

        <BaseModal v-model="confirmPoll" :title="$t('poll.confirmTitle')" @close="selectedPoll = null">
          <p class="text-[#4A5565] text-base">
            {{ $t('poll.confirmDesc', { answer: selectedPollLabel }) }}
          </p>

          <template #footer="{ close }">
            <BaseButton
              variant="secondary"
              size="md"
              class="font-bold px-5 text-[15px]"
              :disabled="isSendingPoll"
              @click="close"
            >
              {{ $t('buttons.cancel') }}
            </BaseButton>
            <BaseButton
              variant="primary"
              size="md"
              class="font-bold px-5 text-[15px]"
              :disabled="isSendingPoll"
              @click="confirmSendPoll"
            >
              {{ $t('buttons.yesSend') }}
            </BaseButton>
          </template>
        </BaseModal>
      </div>
    </div>
  </section>
</template>