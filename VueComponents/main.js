import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './Index.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            components: {
                content: Index
            }
        }
    ]
});

var app = document.getElementById("VueSample");
if (app) {
    new Vue({
        router
        //store
    }).$mount('#VueSample');
}
