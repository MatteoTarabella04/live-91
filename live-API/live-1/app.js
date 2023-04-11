const { createApp } = Vue

createApp({
   data() {
      return {
         url: 'https://flynn.boolean.careers/exercises/api/random/int',
         number: null,
      }
   }, mounted() {
      
      axios
      .get(this.url)
      .then(response => {
         console.log(response);
         this.number = response.data.response;
      })
   }
}).mount('#app');