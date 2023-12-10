// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter, createWebHistory } from 'vue-router';
import ListView from './components/ListView.vue';
import ExpandedView from './components/ExpandedView.vue';
import AddCustomerForm from './components/AddCustomerForm.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/list-view', component: ListView },
    { path: '/expanded/:id',name: 'expanded', component: ExpandedView },
    { path: '/', component: AddCustomerForm },
  ],
});

const app = createApp(App);
app.component('ListView', ListView);
app.component('ExpandedView', ExpandedView);
app.component('AddCustomerForm', AddCustomerForm);

app.use(router);

app.mount('#app');
