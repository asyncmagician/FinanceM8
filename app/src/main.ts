import { createApp } from 'vue'
import './assets/main.scss'
import app from './App.vue'
import router from './router/router'

const mainApp = createApp(app);


mainApp.use(router);
mainApp.mount('#app');
