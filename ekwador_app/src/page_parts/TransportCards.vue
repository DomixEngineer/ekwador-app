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

export default {
    components: {
        TransportCard,
        SectionHeader
    },
    data() {
        return {
            transportCards: [
                {
                    picture: 'transport_katowice.png',
                    title: 'ekwador manieczki',
                    subtitle: 'transport z katowic, opola oraz wrocławia'
                },
                {
                    picture: 'transport_poznan.png',
                    title: 'ekwador manieczki',
                    subtitle: 'transport z poznania'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .flex-container {
        display: flex;
        justify-content: space-between;
    }
</style>