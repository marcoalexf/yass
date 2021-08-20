import { createApp } from 'vue';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App)
app.use(store).use(router).mount('#app');
