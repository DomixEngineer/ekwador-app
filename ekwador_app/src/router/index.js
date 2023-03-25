import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';
import PartiesList from '../pages/PartiesList';
import PartyPreview from '../pages/PartyPreview';
import Contact from '../pages/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/parties',
        name: 'Parties',
        component: PartiesList,
    },
    {
        path: '/parties/preview/:party',
        name: 'PartyPreview',
        component: PartyPreview
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;