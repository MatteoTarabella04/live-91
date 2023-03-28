const { createApp } = Vue

createApp({
   data() {
      return {
         message: 'Hello Vue!',
         fisrtName: '',
         lastName: '',
         active: 'is_active',
         counter: 0,
      }
   },
   methods: {
      sayHi(){
         console.log('Hi');
      },
      greetings: function(){
         console.log('Hello');
      },
      resetCounter(){
         this.counter = 0;
      }
   }
}).mount('#app')
