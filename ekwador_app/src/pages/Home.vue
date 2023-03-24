<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <navbar></navbar>
        <section-header 
            title="Nadchodzące imprezy" 
            leftBarWidth="30" 
            rightBarWidth="70"
        ></section-header>
        <section-header title="Galeria zdjęć z ostatnich imprez"></section-header>
        <section-header title="O klubie"></section-header>
        <section-header title="Transport"></section-header>
        <transport-cards></transport-cards>
        <newsletter-bar></newsletter-bar>
        <section-header title="Kontakt"></section-header>
        <contact-with-map></contact-with-map>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SectionHeader from '@/components/SectionHeader.vue';
import TransportCards from '@/page_parts/TransportCards.vue';
import NewsletterBar from '@/components/NewsletterBar.vue';
import AppFooter from '@/components/AppFooter.vue'
import ContactWithMap from '@/page_parts/ContactWithMap.vue';

export default {
    name: 'HomePage',
    components: {
        Navbar,
        SectionHeader,
        NewsletterBar,
        AppFooter,
        TransportCards,
        ContactWithMap
    }
}
</script>