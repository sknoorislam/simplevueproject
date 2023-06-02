<template>
  <Teleport to="header">
    <HeaderPart />
  </Teleport>
  <router-view />
  <Teleport to="footer">
    <FooterPart />
  </Teleport>
</template>

<script>
import HeaderPart from './layouts/HeaderPart.vue'
import FooterPart from "./layouts/FooterPart.vue";
import { useHead } from '@vueuse/head'
export default {
  name: 'App',
  components: {
    HeaderPart,
    FooterPart
  }, 
  setup() {
    useHead({
      // Can be static or computed
      title: 'Welcome to the vision exalt',
      meta: [
        {
          name: `description`,
          content: 'this about about page',
        },
        ],
    
    })
  }, 
}
</script>

<style>

</style>