<template>
    <PageHero
        headline="Services" 
        description="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        button_caption="Back to Home"
        button_url="/"
        button_caption_2="Contact us"
        button_url_2="/contact-us"
    />


    <!-- Services section -->
	<WhatWeDo />
	<!-- /Services section -->
</template>

<script>
import PageHero from "../components/PageHero.vue";
import WhatWeDo from "../components/WhatWeDo.vue";
import { useHead } from '@vueuse/head'
export default {
    components: {
        PageHero,
        WhatWeDo
    },
    setup() {
        useHead({
        title: 'Services Page',
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