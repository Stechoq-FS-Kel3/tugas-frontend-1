// stores/counter.js
import { defineStore } from 'pinia'

export const userStore = defineStore('userData', {
  state: () => {
    return {
      userData: null
    }
  },
  actions: {
    storeUserData(userData) {
      this.userData = userData
    },
    getStoredUserData() {
      return this.userData
    }
  }
})
