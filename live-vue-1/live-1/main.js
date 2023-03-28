const { createApp } = Vue

createApp({
   data() {
      return {
         message: '....',
         active: false,
         blue: 'blue'
      }
   },
   methods: {
      changeColor() {
         this.active = true;
      }
   }
}).mount('#app')