<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <navbar></navbar>
        <page-slider></page-slider>
        <upcoming-parties></upcoming-parties>
        <mini-photo-gallery></mini-photo-gallery>
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
import MiniPhotoGallery from '@/page_parts/MiniPhotoGallery.vue';
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
        NewsletterBar,
        AppFooter,
        AboutClub,
        TransportCards,
        ContactWithMap,
        PromoSection,
        MiniPhotoGallery
    }
}
</script>