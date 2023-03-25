<template>
    <div>
        <div class="container">
            <section-header 
                title="o klubie"
                :leftBarWidth=20
                :rightBarWidth=80
            ></section-header>
        </div>
        <div class="container flex-container about-club">
            <small-column-text-content :content="aboutClub" title="Ekwador Manieczki"></small-column-text-content>
            <div class="right-column">
                <img src="../assets/images/ekwador_club_outside_photo.png" alt="Klub Ekwador Manieczki" />
            </div>
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import SmallColumnTextContent from '@/components/SmallColumnTextContent.vue'
import aboutClub from '../mock/aboutClub.js'

export default {
    components: {
        SectionHeader,
        SmallColumnTextContent
    },
    data() {
        return {
            aboutClub: aboutClub
        }
    },
    methods: {
        // HTTP REQUEST MOCK
        getClubAboutInfo() {}
    }
}
</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    justify-content: space-between;
}
.about-club {
    &__header {
        color: white;
        font-family: 'lato';
        text-transform: uppercase;
    }
    &__content {
        color: white;
        font-family: 'lato';
        font-size: 26px;
        font-weight: 200;
        line-height: 1.4;
    }
    .left-column {
        max-width: 436px;
        width: 100%;
        padding-left: 13px;
        box-sizing: border-box;
        background-color: #21306f;
    }
    .right-column {
        max-width: 714px;
        width: 100%;
        min-height: 676px;
        background-color: #21306f;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>