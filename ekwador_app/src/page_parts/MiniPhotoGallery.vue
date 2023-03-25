<template>
    <div>
        <div class="container">
            <section-header title="Galeria zdjęć z ostatnich imprez"></section-header>
        </div>
        <div class="container photos-container">
            <div class="container-flex row row--first">
                <div class="photos-container__column photos-container__column--first">
                    <img
                        v-for="photo in photoGalleryList.column_1"
                        :key="photo"
                        :src="getImage(photo.src)" 
                        alt="" 
                        class="photos-container__column__single-photo"
                    >
                </div>
                <div class="photos-container__column photos-container__column--second">
                    <img
                        v-for="photo in photoGalleryList.column_2"
                        :key="photo"
                        :src="getImage(photo.src)" 
                        alt="" 
                        class="photos-container__column__single-photo"
                    >
                </div>
                <div class="photos-container__column photos-container__column--third">
                    <img
                        v-for="photo in photoGalleryList.column_3"
                        :key="photo"
                        :src="getImage(photo.src)" 
                        alt="" 
                        class="photos-container__column__single-photo"
                    >
                </div>
            </div>
            <div class="container row row--second">
                <img
                    v-for="photo in photoGalleryList.column_4"
                    :key="photo"
                    :src="getImage(photo.src)" 
                    alt="" 
                    class="photos-container__column__single-photo"
                >
            </div>
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import Photos from '../mock/miniPhotoGallery.js';

export default {
    components: {
        SectionHeader
    },
    data() {
        return {
            // MOCK HTTP REQUEST RESPONSE
            photoGalleryList: []
        }
    },
    methods: {
        getImage(img) {
            return require('../assets/images/photo_gallery/' + img)
        },
        getPhotosGallery() {},
    },
    beforeMount() {
        this.photoGalleryList = Photos;
    }
}
</script>
 
<style lang="scss" scoped>
.row {
    &--second {
        margin-top: 35px;
        img {
            display: block;
            width: 100%;
        }
    }
}
.container-flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
}
.photos-container {
    background-color: #21306f;
    width: 100%;
    margin-bottom: 25px;
    padding: 15px;
    box-sizing: border-box;
    &__column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1100px;
        &--first {
            max-width: 421px;
            width: 100%;
        }
        &--second {
            max-width: 325px;
            width: 100%;
        }
        &--third {
            max-width: 326px;
            width: 100%;
        }
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>