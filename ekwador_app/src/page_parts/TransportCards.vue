<template>
    <div>
        <div class="container">
            <section-header title="transport"></section-header>
        </div>
        <div class="container flex-container">
            <transport-card 
                v-for="transport in transportCards" 
                :key="transport"
                :picture="transport.picture"
                :title="transport.title"
                :subTitle="transport.subtitle"
                >
            </transport-card>
        </div>
    </div>
</template>

<script>
import TransportCard from '@/components/TransportCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import TransportCards from '../mock/transport.js'

export default {
    components: {
        TransportCard,
        SectionHeader
    },
    data() {
        return {
            // MOCK HTTP REQUEST RESPONSE
            transportCards: TransportCards
        }
    },
    methods: {
        getTransportDetails() {}
    }
}
</script>

<style lang="scss" scoped>
    .flex-container {
        display: flex;
        justify-content: space-between;
        @media (max-width: 767px) {
            display: block;
        }
    }
</style>