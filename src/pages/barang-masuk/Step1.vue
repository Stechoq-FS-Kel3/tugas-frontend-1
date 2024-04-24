<script setup>
import { useBarangMasukStore } from '@/stores/barang-masuk'

const store = useBarangMasukStore()
const { setBarangMasuk } = store
</script>

<template>
  <div>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Tanggal dan Waktu</span>
      </div>
      <input
        @change="setBarangMasuk('date', $event.target.value)"
        required
        type="text"
        placeholder="Masukkan Tanggal dan Waktu"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Reference Number</span>
      </div>
      <input
        @change="setBarangMasuk('reference_number', $event.target.value)"
        required
        type="text"
        placeholder="Masukkan Reference Number"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Supplier ID</span>
      </div>
      <input
        @change="setBarangMasuk('supplier_id', $event.target.value)"
        required
        type="text"
        placeholder="Masukkan Supplier ID"
        class="input input-bordered w-full max-w-xs"
      />
    </label>
  </div>
</template>
