import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home, meta: { auth: false }},
        { path: '/about', name: 'about', component: About, meta: { auth: false }},
    ]
});


// Guard the routes that require authentication
router.beforeEach(async (to, from, next) => {

    let requiresAuth = to.matched.some((record) => record.meta.auth);

    console.log(`Routing from ${from.name} to ${to.name}. requiresAuth = ${requiresAuth}`);
/*
    if (requiresAuth) {
        
        // If we don't have a user yet, tey to get from the API to double check
        if (store.state.user) {
            console.log('USER: ', store.state.user);
            next();
        } 
        else {
            console.log('not authorized');
            next({name:'home', replace:true, params: {originalRoute: to.name}});
            return;
        }
    } 
    else {
        next();
    }
    */

    next();
});

export default router