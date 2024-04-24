<script setup>
import { ref, toRaw, watch } from 'vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import { useBarangMasukStore } from '@/stores/barang-masuk'
import { storeToRefs } from 'pinia'

let currentStep = ref(0)

const store = useBarangMasukStore()
const { data } = storeToRefs(store)

const nextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++
  }
}

const disableForm = (state) => {
  if (currentStep.value === 0 && Object.values(state).some((item) => item === '')) {
    return true
  }
  if (currentStep.value === 1 && !state.selectedItems.length) {
    return true
  }
  return false
}
</script>

<template>
  <div class="bg-white min-h-full p-6 mt-10 max-w-5xl space-y-2">
    <h1 class="text-center text-2xl font-bold text-secondary">
      {{
        currentStep.value === 2
          ? 'Print dan tempelkan label pada kemasan'
          : 'Masukkan Informasi Barang Masuk'
      }}
    </h1>

    <Step1 v-if="currentStep === 0" />
    <Step2 v-else-if="currentStep === 1" />
    <Step3 v-else-if="currentStep === 2" />

    <div>
      <div class="w-fit ml-auto">
        <button
          @click="nextStep"
          :class="`btn btn-md btn-secondary mt-10 ${disableForm(data) && ' btn-disabled'}`"
        >
          {{ currentStep === 2 ? 'Submit' : 'Selanjutnya' }}
        </button>
      </div>
    </div>
  </div>
</template>
