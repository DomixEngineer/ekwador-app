<template>
    <div class="top-header-bg"></div>
    <section-header title="Imprezy"></section-header>
    <div class="container flex-container">
        <div class="parties-list left-column">
            <div 
                class="parties-list__single-party"
                v-for="party in parties"
                :key="party"
            >
                <div class="parties-list__single-party__poster">
                    <single-party-poster
                        :partyId="party.id"
                        :key="party"
                        :partyTitle="party.title"
                        :partyDate="party.date"
                        :pictureLink="party.picture"
                        :year="party.year"
                    ></single-party-poster>
                </div>
                <div class="parties-list__single-party__data">
                    <h1 class="parties-list__single-party__data__header">{{ party.title }}</h1>
                    <div class="parties-list__single-party__data__btn parties-list__single-party__data__btn--month">{{ party.date }}</div>
                    <div class="parties-list__single-party__data__btn parties-list__single-party__data__btn--year">{{ party.year }}</div>
                    <div class="parties-list__single-party__data__btn parties-list__single-party__data__btn--facebook">facebook</div>
                    <div 
                        class="parties-list__single-party__data__btn parties-list__single-party__data__btn--event"
                        @click="goToEventPage(party.id)"
                    >wydarzenie</div>
                </div>
            </div>
        </div>
        <div class="photo-gallery-mini right-column">
            <img 
                class="single-party-mini-photos__mini-photo"
                v-for="photo in randomPhotos"
                :key="photo"
                :src="getImg(photo.src)"
            >
        </div>
    </div>
    <transport-cards></transport-cards>
    <promo-section></promo-section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import TransportCards from '@/page_parts/TransportCards.vue'
import PromoSection from '@/components/PromoSection.vue'
import { getRandomPhotos } from '../services/functions.js'
import photos from '../mock/allPhotos.js'
import parties from '../mock/parties.js'
import SinglePartyPoster from '@/components/SinglePartyPoster.vue'

export default {
    name: 'PartiesList',
    components: {
        SectionHeader,
        SinglePartyPoster,
        TransportCards,
        PromoSection
    },
    data() {
        return {
            randomPhotos: [],
            parties: parties
        }
    },
    methods: {
        getColumnRandomPhotos() {
            getRandomPhotos(4, photos, this)
        },
        getImg(imgFileName) {
            return require(`../assets/images/photo_gallery/${imgFileName}`)
        },
        goToEventPage(partyId) {
            this.$router.push({ name: 'PartyPreview', params: { party: partyId } })
        }
    },
    created() {
        this.getColumnRandomPhotos();
    }
}
</script>

<style lang="scss" scoped>
@mixin background-opacity($color, $opacity: 0.3) {
    background: $color; /* The Fallback */
    background: rgba($color, $opacity);
}

.top-header-bg {
    background-image: url('../assets/images/ekwador_top_header_second_bg.png');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
    top: 0;
}
.flex-container {
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        display: block;
    }
}
.left-column {
    @include background-opacity(#3b3b98, 0.4);
    padding: 15px;
    box-sizing: border-box;
    max-width: 811px;
    width: 100%;
    @media (max-width: 767px) {
        max-width: 90%;
        margin: 0 auto;
    }
}
.right-column {
    @include background-opacity(#3b3b98, 0.4);
    max-width: 340px;
    width: 100%;
    padding: 15px;
    height: fit-content;
    box-sizing: border-box;
    @media (max-width: 767px) {
        max-width: 90%;
        margin: 4vh auto;
    }
    img {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }
}
.parties-list {
    height: fit-content;
    &__single-party {
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
        @media (max-width: 767px) {
            display: block;
        }
        &__poster {
            width: 45%;
            @media (max-width: 767px) {
                width: 100%;
            }
        }
        &__data {
            width: 50%;
            @media (max-width: 767px) {
                width: 75%;
                text-align: center;
                margin: 0 auto;
            }
            &__header {
                color: white;
                font-family: 'lato';
                text-transform: uppercase;
            }
            &__btn {
                color: white;
                font-family: 'lato';
                font-weight: 800;
                text-transform: uppercase;
                text-align: center;
                padding: 10px;
                box-sizing: border-box;
                font-size: 20px;
                width: 70%;
                @media (max-width: 767px) {
                    width: 100%;
                }
                &--year {
                    background-color: #107ef1;
                }
                &--month {
                    background-color: #341f97;
                }
                &--facebook {
                    margin-top: 30px;
                    background-color: #1778f2;
                }
                &--event {
                    cursor: pointer;
                    margin-top: 15px;
                    background-color: #feca57;
                }
            }
        }
    }
}
</style>