import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/routes' // <---
import { createHead } from '@vueuse/head'
const head = createHead()



// createApp(App).mount('#app')
createApp(App).use(head).use(router).mount('#app')

