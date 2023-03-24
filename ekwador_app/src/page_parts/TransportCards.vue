<template>
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
</template>

<script>
import TransportCard from '@/components/TransportCard.vue'

export default {
    components: {
        TransportCard
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