//
///**
// * First we will load all of this project's JavaScript dependencies which
// * includes Vue and other libraries. It is a great starting point when
// * building robust, powerful web applications using Vue and Laravel.
// */
//
//require('./bootstrap');
//
//window.Vue = require('vue');
//
///**
// * Next, we will create a fresh Vue application instance and attach it to
// * the page. Then, you may begin adding components to this application
// * or customize the JavaScript scaffolding to fit your unique needs.
// */
//
//Vue.component('example', require('./components/ExampleComponent.vue'));
//
//const app = new Vue({
//    el: '#app'
//});

import Vue from 'vue';
import VueRouter from 'vue-router';
require('./bootstrap');

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('nav-footer', require('./components/NavFooter.vue'));

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: require('./components/ExampleComponent.vue') },
        { path: '/example', component: require('./components/Example.vue') },
        { path: '/example/1', component: require('./components/Example1.vue') },
        { path: '/example/2', component: require('./components/Example2.vue') },
    ]
});

const app = new Vue({
    router,
    el: '#app'
});
