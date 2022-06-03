import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";
import { PiniaLocalStoragePlugin } from "./plugins/PiniaLocalStoragePlugin";
import { PiniaHistoryPlugin } from "./plugins/PiniaHistoryPlugin";

//Init Pinia
const pinia = createPinia()
  .use(PiniaLocalStoragePlugin)
  .use(PiniaHistoryPlugin);

// Init App
createApp(App).use(BoilerplatePlugin).use(pinia).mount("#app");
