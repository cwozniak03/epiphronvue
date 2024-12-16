import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import App from './App.vue'
import router from './router'

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app')
app.component('VueSlider', VueSlider)
