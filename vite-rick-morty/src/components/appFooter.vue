<script>
import { store } from '../store';
export default {
   name: 'appFooter',

   data() {
      return {
         store,
      }
   }
}
</script>
<template>
   <footer class="text-center text-uppercase">
      <h6 class="p-3" v-if="store.characters">Found {{ store.characters.length }}</h6>
   </footer>
</template>


<style lang="scss" scoped></style>