<script>
import { store } from '../store';
import CharacterItem from './characterItem.vue';
export default {
   name: 'charactersList',

   data() {
      return {
         store,
      }
   },

   props: {
      characters: Array,
   },

   components: {
      CharacterItem
   },
   methods: {
      performSearch() {
         console.log(this.store.searchText);
         const url = this.store.API_URL + `?name=${this.store.searchText}`;
         this.store.callApi(url);
      }
   }

}
</script>
<template>
   <section class="container">
      <div class="searchbox">
         <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search something..." v-model="store.searchText"
               @keyup="performSearch()">
            <button class="btn btn-outline-secondary" type="button" @click="performSearch()">Search</button>
         </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
         <CharacterItem v-for="character in store.characters" :character="character" />
      </div>
   </section>
</template>


<style lang="scss" scoped></style>