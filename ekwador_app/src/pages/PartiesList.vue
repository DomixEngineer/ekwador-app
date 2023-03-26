<template>
    <div class="top-header-bg"></div>
    <section-header title="Imprezy"></section-header>
    <div class="container flex-container">
        <div class="parties-list left-column">

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
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import { getRandomPhotos } from '../services/functions.js'
import photos from '../mock/allPhotos.js'

export default {
    name: 'PartiesList',
    components: {
        SectionHeader
    },
    data() {
        return {
            randomPhotos: []
        }
    },
    methods: {
        getColumnRandomPhotos() {
            getRandomPhotos(4, photos, this)
        },
        getImg(imgFileName) {
            return require(`../assets/images/photo_gallery/${imgFileName}`)
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
}
.left-column {
    @include background-opacity(#3b3b98, 0.4);
    padding: 15px;
    box-sizing: border-box;
    max-width: 811px;
    width: 100%;
}
.right-column {
    @include background-opacity(#3b3b98, 0.4);
    max-width: 340px;
    width: 100%;
    padding: 15px;
    height: fit-content;
    img {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }
}
</style>