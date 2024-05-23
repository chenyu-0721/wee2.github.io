import resumeCover from "./pinia/resumeCover.js";
import workComponent from "./pinia/work/workComponent.js";
import serveComponent from "./pinia/serve/serveComponent.js";
import blogComponent from "./pinia/blog/blogComponent.js";
import vrComponent from "./pinia/blog/vrComponent.js";
import callComponent from "./pinia/calll/callComponent.js";
const { createApp } = Vue;

const routes = [
  { path: "/", component: resumeCover },
  { path: "/work", component: workComponent },
  { path: "/serve", component: serveComponent },
  { path: "/blog", component: blogComponent },
  { path: "/vr", component: vrComponent },
  { path: "/callme", component: callComponent },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: {
    resumeCover,
    workComponent,
    serveComponent,
    blogComponent,
    vrComponent,
    callComponent,
  },
});

app.use(router);

app.mount("#app");
