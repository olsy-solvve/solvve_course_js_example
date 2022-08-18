import "@/api/";

import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

import prime from "./plugins/prime";
prime(app);

import router from "./plugins/router";
app.use(router);

app.mount("#app");
