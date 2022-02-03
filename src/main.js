import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'particles.vue3';
import VueFeather from 'vue-feather';

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(Particles).mount('#app');
