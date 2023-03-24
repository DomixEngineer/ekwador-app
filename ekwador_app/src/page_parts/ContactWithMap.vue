<template>
    <div class="container flex-container">
        <div class="left-column">
            <contact-form-main></contact-form-main>
        </div>
        <div class="right-column">
            <google-maps></google-maps>
            <our-social-medias></our-social-medias>
        </div>
    </div>    
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps.vue'
import OurSocialMedias from '@/components/OurSocialMedias.vue'
import ContactFormMain from '@/components/ContactFormMain.vue'

export default {
    components: {
        GoogleMaps,
        OurSocialMedias,
        ContactFormMain
    }
}
</script>

<style lang="scss" scoped>
    .flex-container {
        display: flex;
        justify-content: space-between;
        .left-column {
            max-width: 436px;
            width: 100%;
        }
        .right-column {
            max-width: 714px;
            width: 100%;
        }
    }
</style>