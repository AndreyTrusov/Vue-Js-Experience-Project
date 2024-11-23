import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DestinationView from '../views/DestinationView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import NotFound from '../views/NotFound.vue';

// import DestinationView from '../views/DestinationView.vue'; // Component to display a destination
// import ExperienceView from '../views/ExperienceView.vue'; // Component to display an experience

// import destinations from '../data.json';
//
// const routes: Array<RouteRecordRaw> = destinations.destinations.map(destination => ({
//     path: '/destination/:slug' + destination.path,
//     name: destination.name,
//     component: DestinationView,
//     props: true,
// }));
//
// routes.push({
//     path: '/',
//     name: 'Home',
//     component: HomeView,
// });
//
// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes
// });

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/destination/:slug',
            name: 'destination',
            component: DestinationView,
            props: true,
            children: [
                {
                    path: ':experienceSlug',
                    name: 'experience',
                    component: ExperienceView,
                    props: true
                }
            ]
        },
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    ],
});


export default router;
