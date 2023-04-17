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
   }

}
</script>
<template>
   <section class="container">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
         <CharacterItem v-for="character in store.characters" :character="character" />
      </div>
   </section>
</template>


<style lang="scss" scoped></style>