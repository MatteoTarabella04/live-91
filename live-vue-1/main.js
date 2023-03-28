const { createApp } = Vue

createApp({
   data() {
      return {
         message: 'Hello Vue!',
         fisrtName: '',
         lastName: '',
         active: 'is_active',
      }
   },
   methods: {
      sayHi(){
         console.log('Hi');
      },
      greetings: function(){
         console.log('Hello');
      }
   }
}).mount('#app')
