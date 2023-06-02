import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/HomePage.vue";
import About from "@/pages/AboutPage.vue";
import Service from "@/pages/ServicePage.vue";
import Contact from "@/pages/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // return {x: 0, y: 0}
    // document.getElementByTag('header').scrollIntoView({ behavior: 'smooth' });
    return { top: 0 }
  }
});

export default router;