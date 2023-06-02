<template>
  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis">{{ headline }}</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        {{ description }}
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <a class="btn btn-primary btn-lg px-4 me-sm-3 text-white" :href="button_url">{{ button_caption }}</a>
        <a class="btn btn-outline-secondary btn-lg px-4" :href="button_url_2">{{ button_caption_2 }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    headline: String,
    description: String,
    button_caption: String,
    button_url: String,
    button_caption_2: String,
    button_url_2: String,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
