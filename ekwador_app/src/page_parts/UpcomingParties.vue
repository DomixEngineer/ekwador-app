<template>
    <div>
        <div class="container">
            <section-header 
                title="Nadchodzące imprezy"
                :leftBarWidth=30 
                :rightBarWidth=70
            ></section-header>
        </div>
        <div class="container party-posters">
            <single-party-poster
            v-for="party in parties"
            :partyId="party.id"
            :key="party"
            :partyTitle="party.title"
            :partyDate="party.date"
            :pictureLink="party.picture"
            :year="party.year"
            ></single-party-poster>
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import SinglePartyPoster from '@/components/SinglePartyPoster.vue'
import parties from '../mock/parties.js'
import _ from 'lodash'

export default {
    components: {
        SectionHeader,
        SinglePartyPoster
    },
    data() {
        return {
            parties: []
        }
    },
    methods: {
        getLatestLimitedParties() {
            const partiesArr = _.take(parties, 3)
            this.parties = partiesArr
        }
    },
    created() {
        this.getLatestLimitedParties();
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