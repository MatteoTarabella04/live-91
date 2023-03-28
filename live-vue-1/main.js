const { createApp } = Vue

createApp({
   data() {
      return {
         message: 'Hello Vue!',
         fisrtName: '',
         lastName: '',
         active: 'is_active',
      }
   }
}).mount('#app')
