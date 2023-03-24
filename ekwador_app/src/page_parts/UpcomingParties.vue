<template>
    <div>
        <div class="container">
            <section-header 
                title="Nadchodzące imprezy"
                leftBarWidth="30" 
                rightBarWidth="70"
            ></section-header>
        </div>
        <div class="container party-posters">
            <single-party-poster
            v-for="party in parties"
            :key="party"
            :partyTitle="party.title"
            :partyDate="party.date"
            :pictureLink="party.picture"
            ></single-party-poster>
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import SinglePartyPoster from '@/components/SinglePartyPoster.vue'
export default {
    components: {
        SectionHeader,
        SinglePartyPoster
    },
    data() {
        return {
            // HTTP REQUEST DATA MOCK
            parties: [
                {
                    id: 1,
                    title: 'Back to old night',
                    date: '09.04.2023r',
                    picture: 'bton_04_09_2023.png'
                },
                {
                    id: 2,
                    title: 'The history of Ekwador',
                    date: '11.03.2023r',
                    picture: 'the_history_03_11_2023.png'
                },
                {
                    id: 3,
                    title: '25 urodziny klubu',
                    date: '11.02.2023r',
                    picture: 'birthday_02_11_2023.png'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .party-posters {
        background-color: #21306f;
        width: 100%;
        min-height: 420px;
        padding: 14px 14px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;   
    }
</style>