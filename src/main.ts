import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// Import Main SCSS
import '@/assets/scss/App.scss';

const app = createApp(App);

app.use(router);

app.mount("#app");
