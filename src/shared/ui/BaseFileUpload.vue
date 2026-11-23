<script setup lang="ts">
import { useId } from 'vue'

interface Props {
  label?: string
  placeholder?: string
  accept?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})

const model = defineModel<File | null>({ default: null })
const inputId = useId()

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  model.value = target.files?.[0] ?? null
}
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <span v-if="label" class="text-base sm:text-[18px] font-medium text-[#1E2939]">
      {{ label }}
    </span>

    <label
      :for="inputId"
      class="text-base sm:text-[18px] text-[#6D7589] p-3.5 sm:p-4 border rounded-xl border-dashed border-[#6A7282] cursor-pointer bg-[#F2F4F8] hover:opacity-75 transition truncate"
      :class="{ 'opacity-50 pointer-events-none': disabled }"
    >
      <input
        :id="inputId"
        type="file"
        :accept="accept"
        :disabled="disabled"
        class="hidden"
        @change="handleFileChange"
      />
      <span :class="{ 'text-[#1E2939] font-medium': model }">
        {{ model ? model.name : placeholder }}
      </span>
    </label>
  </div>
</template>