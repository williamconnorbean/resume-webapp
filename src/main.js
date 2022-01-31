import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'particles.vue3';

const app = createApp(App);
app.use(Particles).mount('#app');
