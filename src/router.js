import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Teams from './pages/Teams.vue';
import Schedule from './pages/Schedule.vue';
import SignUp from './pages/SignUp.vue';
import LogIn from './pages/LogIn.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            components: {default: Home}
        },
        {
            path: '/teams',
            name: 'teams',
            components: {default: Teams}
        },
        {
            path: '/schedule',
            name: 'schedule',
            components: {default: Schedule}
        },
        {
            path: '/signup',
            name: 'signup',
            components: {default: SignUp}
        },
        {
            path: '/login',
            name: 'login',
            components: {default: LogIn}
        }


    ]

})

export default router;