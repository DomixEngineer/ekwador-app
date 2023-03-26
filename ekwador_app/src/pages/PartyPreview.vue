<template>
    <div class="top-header-bg">
    </div>
    <upcoming-parties></upcoming-parties>
    <transport-cards></transport-cards>
    <promo-section></promo-section>
</template>

<script>
import UpcomingParties from '@/page_parts/UpcomingParties.vue'
import TransportCards from '@/page_parts/TransportCards.vue'
import PromoSection from '@/components/PromoSection.vue'

export default {
    name: 'PartyPreview',
    components: {
        UpcomingParties,
        TransportCards,
        PromoSection
    }
}
</script>

<style lang="scss" scoped>
    .top-header-bg {
        background-image: url('../assets/images/ekwador_top_header_first.png');
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 0;
        top: 0;
    }
</style>