import { defineStore } from 'pinia'

export const useBarangMasukStore = defineStore('barang-masuk', {
  state: () => ({ data: { date: '', reference_number: '', supplier_id: '', selectedItems: [] } }),
  getters: {
    getBarangMasukState: (state) => state
  },
  actions: {
    setBarangMasuk(key, value) {
      return (this.data[key] = value)
    },
    addItem(item) {
      if (!this.data.selectedItems.find((product) => product.id === item.id)) {
        this.data.selectedItems.push(item)
      } else {
        alert('Produk sudah ada, silahkan hapus produk sebelum menambahkan lagi')
      }
    },
    removeItem(index) {
      this.data.selectedItems = this.data.selectedItems.filter(
        (_, itemIndex) => itemIndex !== index
      )
    }
  }
})
