<script>
export default {
   name: 'charaterItem',

   props: {
      character: Object,
   }

}
</script>
<template>
   <div class="col">
      <div class="character mb-2 text-center">
         <img :src="character.image" :alt="character.name" class="rounded-circle img-fluid">
         <div class="text">
            <h3>{{ character.name }}</h3>
            <div class="status">
               <p>{{ character.status }}</p>
            </div>
            <div class="species">
               <p>{{ character.species }}</p>
            </div>
         </div>
      </div>
   </div>
</template>


<style lang="scss" scoped></style>