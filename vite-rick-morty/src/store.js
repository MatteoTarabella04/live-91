import { reactive } from "vue";
import axios from 'axios';
export const store = reactive({
   searchText: '',
   loading: true,
   API_URL: 'https://rickandmortyapi.com/api/character',
   characters: null,
   info: null,
   searchText: '',
   callApi(url) {
      axios
         .get(url)
         .then(response => {
            console.log(response);
            this.characters = response.data.results
            this.info = response.data.info
         })
         .catch(err => {
            console.log(err);
            console.error(err.message);
         })
   },
});