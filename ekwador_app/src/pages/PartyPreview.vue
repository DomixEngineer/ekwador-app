<template>
    <div class="top-header-bg">
    </div>
    <section-header :title="partyData.title + ' ' + partyData.date"></section-header>
    <div class="container">
        <div class="single-party-data">
            <h1 class="single-party-data__header">{{ partyData.title }} {{ partyData.date }}</h1>
            <h3 class="single-party-data__subheader">do imprezy pozostało:</h3>
            <div class="single-party-data__count">
                <countdown-timer :endDate="partyData.dateFormat"></countdown-timer>
            </div>
            <h2 class="single-party-data__small-header">Opis wydarzenia</h2>
            <p class="single-party-data__content-text">
                {{ partyData.partyDescription }}
            </p>
            <img :src="getPartyPoster()" :alt="partyData.title" class="single-party-data__party-poster" />
        </div>
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
import CountdownTimer from '@/components/CountdownTimer.vue'
import _ from 'lodash';

export default {
    name: 'PartyPreview',
    components: {
        UpcomingParties,
        TransportCards,
        PromoSection,
        SectionHeader,
        CountdownTimer
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
        },
        getPartyPoster() {
            return require('../assets/images/party_posters/2023/' + this.partyData.picture)
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
        @include background-opacity(#3b3b98, 0.4);
        padding: 15px;
        box-sizing: border-box;
        max-width: 811px;
        &__header {
            color: white;
            font-family: 'lato';
            font-weight: 300;
            text-transform: uppercase;
            margin: 0;
            padding: 0;
        }
        &__subheader {
            margin: 0;
            padding: 0;
            color: white;
            font-family: 'lato';
            font-weight: 300;
            text-transform: uppercase;
        }
        &__small-header {
            color: white;
            font-family: 'lato';
            text-transform: uppercase;
            font-size: 35px;
            font-weight: 800;
        }
        &__content-text {
            color: white;
            font-family: 'lato';
            font-weight: 300;
            font-size: 24px;
            line-height: 1.4;
        }
        &__party-poster {
            display: block;
            width: 100%;
        }
    }

</style>