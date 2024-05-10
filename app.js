import resumeCover from "./pinia/resumeCover.js";
import workComponent from "./pinia/work/workComponent.js";
import serveComponent from "./pinia/serve/serveComponent.js";
const { createApp } = Vue;

const routes = [
  { path: "/", component: resumeCover },
  { path: "/work", component: workComponent },
  { path: "/serve", component: serveComponent },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: { resumeCover, workComponent, serveComponent },
});

app.use(router);

app.mount("#app");
