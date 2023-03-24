<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <navbar></navbar>
        <page-slider></page-slider>
        <upcoming-parties></upcoming-parties>
        <section-header title="Galeria zdjęć z ostatnich imprez"></section-header>
        <promo-section></promo-section>
        <about-club></about-club>
        <transport-cards></transport-cards>
        <newsletter-bar></newsletter-bar>
        <contact-with-map></contact-with-map>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import PageSlider from '@/components/PageSlider.vue';
import UpcomingParties from '@/page_parts/UpcomingParties.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import AboutClub from '@/page_parts/AboutClub.vue';
import TransportCards from '@/page_parts/TransportCards.vue';
import NewsletterBar from '@/components/NewsletterBar.vue';
import AppFooter from '@/components/AppFooter.vue'
import ContactWithMap from '@/page_parts/ContactWithMap.vue';
import PromoSection from '@/components/PromoSection.vue';

export default {
    name: 'HomePage',
    components: {
        Navbar,
        PageSlider,
        UpcomingParties,
        SectionHeader,
        NewsletterBar,
        AppFooter,
        AboutClub,
        TransportCards,
        ContactWithMap,
        PromoSection
    }
}
</script>