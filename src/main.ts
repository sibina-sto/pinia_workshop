import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";

// Init App
createApp(App).use(BoilerplatePlugin).use(createPinia()).mount("#app");
