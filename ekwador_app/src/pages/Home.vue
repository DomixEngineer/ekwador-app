<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <page-slider></page-slider>
        <upcoming-parties></upcoming-parties>
        <mini-photo-gallery></mini-photo-gallery>
        <promo-section></promo-section>
        <about-club></about-club>
        <transport-cards></transport-cards>
        <newsletter-bar></newsletter-bar>
        <contact-with-map></contact-with-map>
    </div>
</template>

<script>
import PageSlider from '@/components/PageSlider.vue';
import UpcomingParties from '@/page_parts/UpcomingParties.vue';
import MiniPhotoGallery from '@/page_parts/MiniPhotoGallery.vue';
import AboutClub from '@/page_parts/AboutClub.vue';
import TransportCards from '@/page_parts/TransportCards.vue';
import NewsletterBar from '@/components/NewsletterBar.vue';
import ContactWithMap from '@/page_parts/ContactWithMap.vue';
import PromoSection from '@/components/PromoSection.vue';

export default {
    name: 'HomePage',
    components: {
        PageSlider,
        UpcomingParties,
        NewsletterBar,
        AboutClub,
        TransportCards,
        ContactWithMap,
        PromoSection,
        MiniPhotoGallery
    }
}
</script>