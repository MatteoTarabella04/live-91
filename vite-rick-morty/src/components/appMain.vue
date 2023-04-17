<script>
import { store } from '../store';
import CharactersList from './charactersList.vue';

export default {
   name: "appMain",

   data() {
      return {
         store,
      }
   },

   components: { CharactersList }
}
</script>
<template>
   <main>

      <CharactersList />

   </main>
</template>


<style lang="scss" scoped></style>