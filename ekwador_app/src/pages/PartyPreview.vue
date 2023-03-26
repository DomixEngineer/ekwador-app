<template>
    <div class="top-header-bg">
    </div>
    <section-header :title="partyData.title + ' ' + partyData.date"></section-header>
    <div class="container single-party-data">
        <h1>{{ partyData.title }} {{ partyData.date }}</h1>
    </div>
    <upcoming-parties></upcoming-parties>
    <transport-cards></transport-cards>
    <promo-section></promo-section>
</template>

<script>
import UpcomingParties from '@/page_parts/UpcomingParties.vue'
import TransportCards from '@/page_parts/TransportCards.vue'
import PromoSection from '@/components/PromoSection.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import parties from '../mock/parties.js'
import _ from 'lodash';

export default {
    name: 'PartyPreview',
    components: {
        UpcomingParties,
        TransportCards,
        PromoSection,
        SectionHeader
    },
    data() {
        return {
            partyData: {}
        }
    },
    methods: {
        getPartyDetails() {
            this.partyData = _.find(parties, (party) => {
                return party.id == this.$route.params.party
            })
        }
    },
    created() {
        this.getPartyDetails()
    }
}
</script>

<style lang="scss" scoped>

    @mixin background-opacity($color, $opacity: 0.3) {
        background: $color; /* The Fallback */
        background: rgba($color, $opacity);
    }

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
    .single-party-data {
        @include background-opacity(#3b3b98, 0.4)
    }

</style>