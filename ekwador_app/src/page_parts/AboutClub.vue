<template>
    <div>
        <div class="container">
            <section-header title="o klubie"></section-header>
        </div>
        <div class="container flex-container about-club">
            <div class="left-column"></div>
            <div class="right-column">
                <img src="../assets/images/ekwador_club_outside_photo.png" alt="Klub Ekwador Manieczki" />
            </div>
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
export default {
    components: {
        SectionHeader
    }
}
</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    justify-content: space-between;
}
.about-club {
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