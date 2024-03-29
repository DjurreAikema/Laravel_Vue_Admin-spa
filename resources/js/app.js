/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";

require('./bootstrap');
window.Vue = require('vue');

import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import store from './store'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('nav-component', require('./components/Nav.vue').default);
Vue.component('side-component', require('./components/Side.vue').default);
Vue.component('Modal', require('./components/Modal.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

//Import v-from
import { Form } from 'vform'
import { HasError } from 'vform/src/components/bootstrap5'
window.Form = Form;
Vue.component(HasError.name, HasError)

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: routes
});

const app = new Vue({
    store,
    el: '#app',
    router: router,
    render: h => h(App),
});
