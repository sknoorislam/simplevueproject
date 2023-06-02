<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../public/Image/slider2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../public/Image/slider2.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <WhatWeDo></WhatWeDo>
    <ContactForm1></ContactForm1>
</template>
<script>
import { useHead } from '@vueuse/head'

import ContactForm1 from '@/components/ContactForm1.vue';
import WhatWeDo from '@/components/WhatWeDo.vue';

export default {
    components:{
        ContactForm1,
        WhatWeDo
    },
  setup() {
    useHead({
      // Can be static or computed
      title: 'Home Page',
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