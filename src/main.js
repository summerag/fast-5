import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store.js'


import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseForm from './components/UI/BaseForm.vue'



const app = createApp(App)

app.use(router);
app.use(store);
app.component('base-button',BaseButton);
app.component('base-card',BaseCard);
app.component('base-form', BaseForm);

app.mount('#app');
