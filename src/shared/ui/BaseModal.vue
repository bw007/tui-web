<script setup lang="ts">
interface Props {
  modelValue: boolean
  title?: string
  body?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <Teleport to="body" :disabled="!body">
    <div
      v-if="modelValue"
      class="inset-0 flex items-center justify-center bg-black/40 p-4"
      :class="body ? 'fixed z-50' : 'absolute z-10 rounded-2xl'"
      @click.self="close"
    >
      <div class="w-full max-w-110 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div
          v-if="title"
          class="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]"
        >
          <h3 class="text-lg sm:text-[19px] font-bold text-[#1E2939]">
            {{ title }}
          </h3>

          <button
            type="button"
            class="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#6A7282] hover:text-[#1E2939] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
            @click="close"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="px-6 py-5">
          <slot />
        </div>

        <div
          v-if="$slots.footer"
          class="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E5E7EB]"
        >
          <slot name="footer" :close="close" />
        </div>
      </div>
    </div>
  </Teleport>
</template>