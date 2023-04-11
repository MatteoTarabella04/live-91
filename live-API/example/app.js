const { createApp } = Vue

createApp({
   data() {
      return {
         url: 'https://flynn.boolean.careers/exercises/api/random/word',
         my_data: null,
         word: null,
         error: null,
      }
   },
   mounted() {
      //console.log(axios);
      //axios.get(this.url);
      //console.log(axios.get(this.url)); (promise)
      axios
      .get(this.url)
      .then(response => {
         //console.log(response.data);
         // prenso l'intero response e lo salvo in data
         this.my_data = response.data;
         // prendo solo i dati di cui ho bisogno
         this.word = response.data.response;
         console.log(response.data.response);
      }).catch(error => {
         console.error(error.message);
         this.error = error.message;
      })
   }
}).mount('#app');