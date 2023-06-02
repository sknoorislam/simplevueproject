<template>
    <PageHero
        headline="Contact us" 
        description="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        button_caption="Back to Home"
        button_url="/"
        button_caption_2="Know more"
        button_url_2="/about"
    />

  <div class="mb-5">
    <ContactForm1 />
  </div>

</template>


<script>
import PageHero from "../components/PageHero.vue";

import { useHead } from '@vueuse/head'
import ContactForm1 from '@/components/ContactForm1.vue';

export default {
    components:{
        PageHero,
        ContactForm1
    },
  setup() {
    useHead({
      // Can be static or computed
      title: 'Contact Page',
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