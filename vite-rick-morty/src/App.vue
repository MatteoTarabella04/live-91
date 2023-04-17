<script>
import { store } from './store';
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';

export default {

  components: {
    appHeader,
    appMain,
    appFooter,
  },

  data() {
    return {
      store,
    }
  },
  mounted() {
    store.callApi(store.API_URL)
  }

}
</script>
<template>
  <appHeader />
  <appMain></appMain>
  <appFooter />
</template>


<style lang="scss" scoped></style>