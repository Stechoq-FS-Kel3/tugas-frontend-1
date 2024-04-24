<script setup>
import { useBarangMasukStore } from '@/stores/barang-masuk'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useBarangMasukStore()
const { data } = storeToRefs(store)

const dummyProducts = [
  {
    id: 1,
    name: 'lemari',
    description: 'Lemari warna kuning',
    sku: '1',
    size: '20cm x 20cm x 20cm',
    weight: '20 kg',
    zone: 'A01',
    stock: 10
  }
]

let selectedProduct = ref(null)
let quantity = ref(0)

const handleChangeProduct = (product) => {
  selectedProduct.value = JSON.parse(product)
}
const handleAddProduct = () => {
  store.addItem({ ...selectedProduct.value, quantity: quantity.value })
  selectedProduct.value = null
  quantity.value = 0
}
</script>

<template>
  <div class="bg-white p-4 mt-10 max-w-5xl space-y-4">
    <section class="flex justify-between items-center">
      <div>
        <h2 class="font-bold text-lg">List Barang</h2>
        <p>Masukkan list barang</p>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="tambah_barang.showModal()">
        Tambah Barang +
      </button>
      <dialog id="tambah_barang" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Tambah Barang</h3>
          <div class="py-4">
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Produk</span>
              </div>
              <select
                :value="JSON.stringify(selectedProduct)"
                @change="handleChangeProduct($event.target.value)"
                class="select select-bordered w-full"
              >
                <option
                  v-for="product in dummyProducts"
                  :key="product.id"
                  :value="JSON.stringify(product)"
                >
                  {{ product.name }}
                </option>
              </select>
            </label>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Quantity</span>
              </div>
              <input
                :value="quantity"
                @change="quantity = $event.target.value"
                required
                min="1"
                type="number"
                placeholder="Input quantity"
                class="input input-bordered w-full"
              />
            </label>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <button
                @click="handleAddProduct"
                :class="`btn btn-secondary ${(!selectedProduct || !quantity) && ' btn-disabled'}`"
              >
                Tambahkan
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
    <div class="overflow-x-auto whitespace-nowrap">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>SKU</th>
            <th>Ukuran</th>
            <th>Berat</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(product, index) in data.selectedItems" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.sku }}</td>
            <td>{{ product.size }}</td>
            <td>{{ product.weight }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button
                @click="store.removeItem(index)"
                class="bg-red-200 text-red-700 px-2 rounded-full"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
